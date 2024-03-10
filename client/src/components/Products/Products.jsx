import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'
import './Products.css'
import { Link } from 'react-router-dom'

import { addProductCart } from '../../Redux/CarritoSlice'
import { useSelector, useDispatch  } from 'react-redux'
import axios from 'axios'

function Products(props) {    
  
  const dispatch = useDispatch()

  const stateGlobal = useSelector((state) => state.products)
  const content = stateGlobal['products']
  
  const usuarioAlmacenado = localStorage.getItem("user")
  const usuario = JSON.parse(usuarioAlmacenado)
  const carData = { idUser: usuario.id }

  const stateGlobalCarrito = useSelector((state) => state.productsCarrito)
  
  const producto = stateGlobalCarrito.productsCarrito
  const resultadoProducto = producto.find((produc) => produc.id === props.id)

  const carritoId = resultadoProducto ? resultadoProducto.id_carrito : null
  const cantidad = resultadoProducto ? resultadoProducto.cantidad : null
  const idUser = resultadoProducto ? resultadoProducto.id_user : null
  const idProduct = resultadoProducto ? resultadoProducto.id : null
  const precio = resultadoProducto ? resultadoProducto.precio : null

  const idCarrito = async () => {
    const response = await axios.post('http://localhost:3001/car/new', carData)
    return response.data
  }

  const idCarritoUser = idCarrito()

  idCarritoUser.then((idCarrito) => {
    localStorage.setItem("idCarritoUser", idCarrito)
  })

  const handlerCarritoAdd = async (cartNewProduct) => {

    dispatch(addProductCart(cartNewProduct)) 

    // Agregar productos al carrito
    const productData = {
      idCar: carritoId,
      idUser: idUser,
      idProduct: idProduct,
      id: idProduct,
      cantidad: cantidad,
      monto: cantidad*precio,
      estado: false
    }

    const responseCartProducts = await axios.post('http://localhost:3001/cartproduct/new', productData)
    console.log('Producto agregado al carrito de la base de datos:', responseCartProducts)
    
  }

  return (
    <div className='productList'>
        <div key={props.id} className='productCard'>
            <Link to={`/detail/${props.id}`}>
                <img src={props.imagen} alt='product-img' className='productImage' height={'100px'}></img>
            </Link>
    
            <FaShoppingCart className={"productCard__cart"} onClick={() => handlerCarritoAdd(props)} />
            <FaRegBookmark className={"productCard__wishlist"} />
            <FaFireAlt className={"productCard__fastSelling"} />
    
            <div className='productCard__content'>
                <h5 className='productName'>{props.nombre}</h5>
                <h3 className='productDescription'>{props.descripcion}</h3>
                <div className='displayStack__1'>
                    <div className='productPrice'>${props.precio}</div>
                </div>
                <div className='displayStack__1'>
                    <div className='productNroserie'>Número de serie {props.nroserie}</div>
                </div>
                <div className='displayStack__2'>
                    <div className='productRating' >
                        {[...Array(props.rating)].map((index) => (
                            <FaStar id={index + 1 } key={props.id} />
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Products;
