//import content from '../content'
import Category from '../pages/Category/Category';
import contents from '../content';
import Products from '../../Components/Products/Products'


import { useEffect } from "react";
import { useSelector, useDispatch  } from 'react-redux'
import { getProducts, addProduct } from '../../Redux/ProductsSlice'

function Home() {

  const stateGlobal = useSelector((state) => state.products)
  const content = stateGlobal['products']

  const dispatch = useDispatch()

  const syncronized = async () => {
    const consultaDB = await dispatch(getProducts())
    
    dispatch(addProduct(consultaDB.payload))
  }
    
  useEffect(() => {
    syncronized()
  }, [])

  return (
    <div>
      <Category />
    <div className='App'>
    {contents.map(contents => (
      <Products 
      key={contents.id}
      imagen={contents.imagen}
      nombre={contents.nombre}
      precio={contents.precio}
      nroserie={contents.nroserie}
      descripcion={contents.descripcion}
      rating={contents.rating}
      />
      ))}
</div>
      </div>
    
  )
}

export default Home