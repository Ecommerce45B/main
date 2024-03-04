import { useParams } from 'react-router-dom'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/CarritoSlice'
import axios from 'axios'
import styles from './Detail.module.css'

function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()

 
  const product = useSelector((state) => {
    const products = state.products.products; 
    return products.find(product => product.id === parseInt(id)) 
  })

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  
  const handlerCarritoAdd = () => {
  const handlerCarritoAdd = async()=> {
    // console.log('State global carrito')
    // console.log(stateGlobalCarrito.productsCarrito)
    // console.log('product')
    // console.log(product)
    dispatch(addProduct(product))
  }

  
  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar className={styles.star} />)
    }
    return stars;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.nombre}</h2>
      <img className={styles.image} src={product.imagen} alt={product.nombre} />
      <p className={styles.price}>Precio: ${product.precio}</p>
      <p className={styles.descripcion}>Descripción: {product.descripcion}</p>
      <p className={styles.especificaciones}>Especificaciones: {product.especificaciones}</p>
      <p className={styles.nroserie}>Número de Serie: {product.nroserie}</p>
      <p className={styles.nromac}>Número MAC: {product.nromac}</p>
      <p className={styles.stock}>Stock: {product.stock}</p>
      <p className={styles.minimo}>Mínimo: {product.minimo}</p>
      <p className={styles.preferencia}>Preferencia: {product.preferencia}</p>
      <p className={styles.estado}>Estado: {product.estado ? 'Activo' : 'Inactivo'}</p>
      <p className={styles.categoria}>Categoría: {product.Categoria.nombre}</p>
      <p className={styles.marca}>Marca: {product.Marca.nombre}</p>
      <p className={styles.fabricante}>Fabricante: {product.Fabricante.nombre}</p>
      <div className={styles.rating}>
        <p className={styles.textRating}>Rating:</p>
        <div className={styles.stars}>{renderStars(product.rating)}</div>        
      </div>
      <FaShoppingCart className={"productCard__cart"} onClick={handlerCarritoAdd} />
    </div>
  )
}

export default Detail;
