import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'
import './Products.css'
import { Link } from 'react-router-dom'

import { addProduct } from '../../Redux/CarritoSlice'
import { useSelector, useDispatch  } from 'react-redux'


function Products(props) {    
  
  const dispatch = useDispatch()
  const stateGlobal = useSelector((state) => state.productsCarrito)

  const handlerCarritoAdd = (cartNewProduct) => {
    console.log(stateGlobal)
    dispatch(addProduct(cartNewProduct))    
  }

  return (
    <div className='productList'>
        <div key={props.id} className='productCard'>
            <Link to={`/detail/${props.id}`}>
                <img src={props.imagen} alt='product-img' className='productImage'></img>
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

export default Products