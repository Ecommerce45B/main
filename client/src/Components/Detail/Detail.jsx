import { useParams } from 'react-router-dom'
//import productData from '../content';
import { FaStar, FaShoppingCart } from 'react-icons/fa'

import styles from './Detail.module.css'
import { useSelector, useDispatch  } from 'react-redux'

import { addProduct } from '../../Redux/CarritoSlice'

function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const stateGlobal = useSelector((state) => state.products)
  const productData = stateGlobal['products']

  const stateGlobalCarrito = useSelector((state) => state.productsCarrito)

  const product = productData.find(product => product.id === parseInt(id))

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handlerCarritoAdd = ()=> {
    console.log(stateGlobalCarrito)
    dispatch(addProduct(product))
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className={styles.star} />)
    }
    return stars;
  }
  console.log();
  return (
    product && <div className={styles.container}>
      <h2 className={styles.title}>{product.nombre}</h2>
      <img className={styles.image} src={product.imagen} alt={product.nombre} />
      <p className={styles.price}>Precio: ${product.precio}</p>
      <p className={styles.productType}>Tipo de producto: {product.productType}</p>
      <p className={styles.description}>Descripción: {product.descripcion}</p>
      <p className={styles.totalSales}>Ventas totales: {product.totalSales}</p>
      <p className={styles.timeLeft}>Días restantes: {product.timeLeft}</p>
      <div className={styles.rating}>
        <p className={styles.textRating}>Rating:</p>
        <div className={styles.stars}>{renderStars(product.rating)}</div>        
      </div>
      <FaShoppingCart className={"productCard__cart"} onClick={() => handlerCarritoAdd()} />
    </div>
  )
}

export default Detail;
