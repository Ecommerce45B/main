//import content from '../content'
import Products from "../Products/Products";

import { useEffect } from "react";
import { useSelector, useDispatch  } from 'react-redux'
import { getProducts, addProduct } from '../../Redux/ProductsSlice'
import { getVotos } from '../../Redux/VotosSlice';

function Home() {

  const stateGlobal = useSelector((state) => state.products);
  const [content] = stateGlobal['products'];
  const stateVotos = useSelector((state) => state.votos);
  const datosVotos = stateVotos['datosVotos'];

  const dispatch = useDispatch()

  const syncronized = async () => {
    const consultaDB = await dispatch(getProducts())
    console.log('consultaDB--->',consultaDB);
    const addProductState = dispatch(addProduct(consultaDB.payload))

    console.log('addProductState--->',addProductState);
  }
  const syncVotos=async(id)=>{
    await dispatch(getVotos(id));
  }
    
  useEffect(() => {
    syncronized()
  }, [])
  content && content.map(element => (
    useEffect(() => {
      syncVotos(element.id)
    }, [])
    
  ))
  return (
    <div className='App'>
      {content && content.map(element => (
          <Products 
              key={element.id}
              id={element.id}
              imagen={element.imagen}
              nombre={element.nombre}
              precio={element.precio}
              stock={element.stock}
          />
      ))}
    </div>
  )
}

export default Home