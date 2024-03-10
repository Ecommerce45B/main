import Category from '../pages/Category/Category';
import Products from '../../Components/Products/Products'

import './Home.css'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { getProducts, addProduct } from '../../Redux/ProductsSlice'


import Announcement from '../Announcement/Announcement.jsx';
import Banner from '../Banner/Banner';
import HomeCategory from '../HomeCategory';
import Sponsor from '../../Components/Sponsor.jsx';

function Home() {

  const stateGlobal = useSelector((state) => state.products)
  const content = stateGlobal['products']

  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()

  const syncronized = async() => {
    const consultaDB = await dispatch(getProducts())
    dispatch(addProduct(consultaDB.payload))
  }
  
  useEffect(() => {
    syncronized()
  }, [])

  const tamaño = 10
  let inicio = 0
  let fin = tamaño

  const sections = []

  while (inicio < content.length) {
    let aux1 = content.slice(inicio, fin)
    sections.push(aux1)
    inicio += tamaño
    fin += tamaño
  }
  
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

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
