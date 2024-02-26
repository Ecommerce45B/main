import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'
import './Products.css'
import { Link } from 'react-router-dom'

import { addProduct } from '../../Redux/ProductsSlice'
import { useSelector, useDispatch  } from 'react-redux'


function Products(props) {
  
  const dispatch = useDispatch()
  const stateGlobal = useSelector((state) => state.productsCarrito)

  const handlerCarritoAdd = ()=> {
    console.log(stateGlobal)
    dispatch(addProduct(props))
  }


  return (
    <div className='productList'>
    <div key={props.id} className='productCard'>
        <img src={props.imagen} alt='product-img' className='productImage'></img>
  
        <FaShoppingCart className={"productCard__cart"} onClick={() => handlerCarritoAdd()} />
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
                <div className='productRating'>
                    {[...Array(props.rating)].map((index) => (
                        <FaStar id={index + 1 } key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Products