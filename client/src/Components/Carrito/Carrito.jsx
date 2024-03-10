import { useSelector, useDispatch  } from 'react-redux'
import { removeProducto } from '../../Redux/CarritoSlice'

import styles from './Carrito.module.css'

const Carrito = ()=>{

  const dispatch = useDispatch()
  
  const stateGlobalCarrito = useSelector((state) => state.productsCarrito)
  const carrito = stateGlobalCarrito.productsCarrito

  const handlerDelete = (idCarrito)=>{
    dispatch(removeProducto(idCarrito))
  }

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
