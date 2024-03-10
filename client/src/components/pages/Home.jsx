import Category from '../pages/Category/Category';
import Products from '../../Components/Products/Products'

import './Home.css'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { getProducts, addProduct } from '../../Redux/ProductsSlice'
import { addProductCart } from '../../Redux/CarritoSlice'
import axios from 'axios'

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
    const syncronized = async() => {
      const consultaDB = await dispatch(getProducts())
      await dispatch(addProduct(consultaDB.payload))
    }
    syncronized()
    console.log('------------------------ Carrito Local Storage ------------------------')
    console.log(carritoLocalStorage)

    const baseDatosCart = async() =>{
      try {
        const respuestaGet = await axios.get(`http://localhost:3001/cartproduct/get/${1}`)
        console.log('------------ Products cart Axios ------------')
        console.log(respuestaGet.data)
        for (let i = 0; i < respuestaGet.data.length; i++) {
          for (let j = 0; j < content.length; j++) {
            if(respuestaGet.data[i].id === content[j].id){
              const refactor = {
                cantidad: respuestaGet.data[i].cantidad,
                ...content[j]
              }
              console.log('Log x2 ------------------ Consulta de productos Carrito ------------------')
              console.log(respuestaGet.data[i].cantidad)
              console.log(refactor)
              dispatch(addProductCart(refactor))
            }       
          }
        }
      }
      catch (error) {
        console.error(error)
      }
    }    
    baseDatosCart()
  }, [carritoLocalStorage, dispatch, content])

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

  return (
    <div className='content'>
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
        <Sponsor />
      </div> 
    </div>
  )
}

export default Home
