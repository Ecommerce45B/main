import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import './Products.css'
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVotos } from '../../Redux/VotosSlice';

function Products(props) {
  const stateGlobal = useSelector((state) => state.votos);
  const datosVotos = stateGlobal['datosVotos'];

  const dispatch = useDispatch();

  const syncronized = async () => {
    await dispatch(getVotos(props.id));
  }

  //Recuperando los datos de los votos del producto
  useEffect(() => {
    const fetchData = async () => {
      await syncronized();
    };
    fetchData();
  }, []);

  let promedio=0;
  let totalVotos=0;

  if(datosVotos && datosVotos.length > 0) {
    promedio=parseFloat(datosVotos[0].promedio).toFixed(2);
    console.log('promedio--->', promedio);
    totalVotos=datosVotos[1].count;
    console.log('totalVotos--->', totalVotos);
  }
  const datosRating=(
    <div>
      <hr/>
      <h4 className="rating-text">⭐ rating:{promedio}&nbsp;&nbsp;🗳 Votos:{totalVotos}</h4>
    </div>)
  return (
      <div className='productList'>
        <div key={props.id} className='productCard'>
          <Link to={`/detail/${props.id}`} className='productLink'> 
            <img src={props.imagen} alt='product-img' className='productImage'></img> 
          </Link>
  
          <FaShoppingCart className={"productCard__cart"} />
          <FaRegBookmark className={"productCard__wishlist"} />
          <FaFireAlt className={"productCard__fastSelling"} />
  
          <div className='productCard__content'>
            <h3 className='productName'>{props.nombre}</h3>
            <div className='displayStack__1'>
              <div className='productPrice'>${props.precio}</div>
              <div className='productSales'>{props.stock} en stock</div>
            </div>
            <div className='displayStack__2'>
              <div className='productRating'>
                {datosRating}
              </div>
              {/* <div className='productTime'>{props.timeLeft} days left</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Products