import Category from '../pages/Category/Category';
import Products from '../../Components/Products/Products'

import './Home.css'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { getProducts, addProduct } from '../../Redux/ProductsSlice'
import { addProductCart } from '../../Redux/CarritoSlice'
import axios from 'axios'



import Announcement from '../Announcement/Announcement.jsx';
import Banner from '../Banner/Banner';
import HomeCategory from '../HomeCategory';
import Sponsor from '../../Components/Sponsor.jsx';

function Home() {

  const stateGlobal = useSelector((state) => state.products)
  const content = stateGlobal['products']

  // const stateGlobalCarrito = useSelector((state) => state.productsCarrito)
  // const carrito = stateGlobalCarrito.productsCarrito  

  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()
  
  const carritoJSON = localStorage.getItem("carrito")
  const carritoLocalStorage = JSON.parse(carritoJSON)

  useEffect(() => {    
    console.log('------------------------ Carrito Local Storage ------------------------')
    console.log(carritoLocalStorage)
    const syncronized = async() => {
      const consultaDB = await dispatch(getProducts())
      await dispatch(addProduct(consultaDB.payload))
    }
    syncronized()
  }, [carritoLocalStorage, dispatch])

  const tamaño = 10;
  const sections = [];
  
  if (content.length <= tamaño) {
    sections.push(content);
  } else {
    for (let i = 0; i < content.length; i += tamaño) {
      sections.push(content.slice(i, i + tamaño));
    }
  }
  console.log("Contenido de productos:", content);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // console.log('----------------------------- Section -----------------------------')
  // console.log(sections)
  // console.log(content)

  return (
    <div className='content'>
      <Announcement />
      <Category />
      <div className='pagination'>
        {
          sections && sections.map((section, index) => (
            <button
              key={index}
              className={`page-button ${index === currentPage ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index+1}
            </button>
          ))
        }
      </div>
      <div className='cards'>
        {
          sections && sections.map((section, index) => {
            const currentCards = []
            for (let i = 0; i < section.length; i++) {
              currentCards.push(
                <Products
                  key={section[i].id}
                  id={section[i].id}
                  imagen={section[i].imagen}
                  nombre={section[i].nombre}
                  descripcion={section[i].descripcion}
                  precio={section[i].precio}
                  nroserie={section[i].nroserie}
                  rating={section[i].rating}
                />
              )
            }
            return(
              <div key={index} className={`page ${index === currentPage ? 'active' : ''}`}>
                {currentCards}
              </div>
            ) 
          })          
        }
      </div>
      <div>
        <h1>Patrocidado por:</h1>
        <Sponsor />
      </div> 
    </div>
  )
}

export default Home
