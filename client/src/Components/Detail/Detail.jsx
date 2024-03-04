import { useParams } from 'react-router-dom'
//import productData from '../content';
import { FaStar, FaShoppingCart } from 'react-icons/fa'

import styles from './Detail.module.css'
import { useSelector, useDispatch  } from 'react-redux'

import { addProduct } from '../../Redux/CarritoSlice'
import axios from 'axios'

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

  const handlerCarritoAdd = async()=> {
    // console.log('State global carrito')
    // console.log(stateGlobalCarrito.productsCarrito)
    // console.log('product')
    // console.log(product)
    dispatch(addProduct(product))

    // Crear un carrito para el usuario
    const usuarioAlmacenado = localStorage.getItem("user")
    const usuario = JSON.parse(usuarioAlmacenado)
    const carData = { idUser: usuario.id }
    const response = await axios.post('http://localhost:3001/car/new', carData)
    console.log('----------------------------------------')
    console.log('Car creation successful:', response.data)

    console.log(stateGlobalCarrito);

    const producto = stateGlobalCarrito.productsCarrito[0]
    const cantidad = producto.cantidad
    const idUser = producto.id_user
    const idProduct = producto.id
    const precio = product.precio
    const idCarrito = response.data
    // Agregar productos al carrito
    const productData = {
      "idCar": idCarrito,
      "idUser": idUser,
      "idProduct": idProduct,
      "cantidad": cantidad,
      "monto": cantidad*precio,
      "estado": false
    }
    const responseCartProducts = await axios.post('http://localhost:3001/cartproduct/new', productData)
    console.log('Producto agregado al carrito:', responseCartProducts)

  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar className={styles.star} />)
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
