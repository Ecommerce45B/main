import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'
import './Products.css'
import { Link } from 'react-router-dom'

import { addProduct } from '../../Redux/CarritoSlice'
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
        <Link to={`/detail/${props.id}`} className='productLink'> 
          <img src={props.image} alt='product-img' className='productImage'></img> 
        </Link>

        <FaShoppingCart className={"productCard__cart"} onClick={() => handlerCarritoAdd()} />
        <FaRegBookmark className={"productCard__wishlist"} />
        <FaFireAlt className={"productCard__fastSelling"} />

        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
            <div className='productPrice'>${props.price}</div>
            <div className='productSales'>{props.totalSales} units sold</div>
          </div>
          <div className='displayStack__2'>
            <div className='productRating'>
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1 } key={index} />
              ))}
            </div>
            <div className='productTime'>{props.timeLeft} days left</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products