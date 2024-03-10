import { useSelector, useDispatch  } from 'react-redux'
import { removeProducto, addProductCart } from '../../Redux/CarritoSlice'

import axios from 'axios'

import styles from './Carrito.module.css'
import { useEffect } from 'react'

const Carrito = ()=>{

  const dispatch = useDispatch()

  const stateGlobalCarrito = useSelector((state) => state.productsCarrito)
  const globalCarrito = stateGlobalCarrito

  const stateGlobal = useSelector((state) => state.products)
  const content = stateGlobal['products']

  const carritoJSON = localStorage.getItem("carrito")
  const carritoLocalStorage = JSON.parse(carritoJSON)
  const carrito = carritoLocalStorage
  
  const dropData = (idProduct) => {
    const url = `http://localhost:3001/cartproduct/delete/${idProduct}`
    axios.delete(url)
      .then((response) => {
        console.log("Producto eliminado exitosamente:", response.data)
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error.response.data)
      })
  }

  const handlerDelete = async (idProduct)=>{
    dropData(idProduct)
    console.log(globalCarrito)
    dispatch(removeProducto(idProduct))
  }

  useEffect(() => {
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
        console.log('------------ Global Carrito ------------')
        console.error(globalCarrito)
      }
    }    
    baseDatosCart()
  }, [content, dispatch, globalCarrito])

  const totales = []

  return(
    <div className={styles.container}>
      <h1 className={styles.titulo}>Carrito de productos</h1>
      <table className={styles.table}>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
          <th>Borrar</th>
        </tr>
        { 
          carrito && carrito.map(product=>(
            <tr key={product.id}>
              <td>{product.nombre}</td>
              <td>{product.cantidad}</td>
              <td>{product.precio}</td> 
              <td>{totales.push(product.precio * product.cantidad) && product.precio * product.cantidad}</td>
              <td>
                <button className={styles.borrar} onClick={() => handlerDelete(product.id)}>Borrar</button>
              </td>              
            </tr>
          ))
        }
        <tr>
          <td></td>
          <td></td>          
          <td className={styles.totalComprasText}>Total de compra:</td>
          <td className={styles.totalCompras}>{totales ? totales.reduce((acumulador, valorActual) => acumulador + valorActual, 0) : 0}</td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Carrito
