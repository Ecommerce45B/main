import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import './Products.css'

function Products(props) {
  return (
    <div className='productList'>
    <div key={props.id} className='productCard'>
        <img src={props.imagen} alt='product-img' className='productImage'></img>

        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        <FaFireAlt className={"productCard__fastSelling"} />

        <div className='productCard__content'>
            <h3 className='productName'>{props.nombre}</h3>
            <div className='displayStack__1'>
                <div className='productPrice'>${props.precio}</div>
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