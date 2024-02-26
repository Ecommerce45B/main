//import content from '../content'
import Products from "../Products/Products";

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
    <div className='App'>
      {content && content.map(element => (
          <Products 
              key={element.id}
              id={element.id}
              image={element.image}
              name={element.name}
              price={element.price}
              totalSales={element.totalSales}
              timeLeft={element.timeLeft}
              rating={element.rating}
          />
      ))}
    </div>
  )
}

export default Home