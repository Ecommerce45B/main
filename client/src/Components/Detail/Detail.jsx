import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector  } from 'react-redux'
//import productData from '../content';
import { FaStar } from 'react-icons/fa';
import styles from './Detail.module.css'; 

function Detail() {
  const { id } = useParams();
  const stateGlobal = useSelector((state) => state.products)
  const productData = stateGlobal['products']

  const product = productData.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className={styles.star} />); 
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.name}</h2>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.price}>Precio: ${product.price}</p>
      <p className={styles.productType}>Tipo de producto: {product.productType}</p>
      <p className={styles.description}>Descripción: {product.description}</p>
      <p className={styles.totalSales}>Ventas totales: {product.totalSales}</p>
      <p className={styles.timeLeft}>Días restantes: {product.timeLeft}</p>
      <div className={styles.rating}>
        <p className={styles.textRating}>Rating:</p>
        <div className={styles.stars}>{renderStars(product.rating)}</div>
      </div>
    </div>
  );
}

export default Detail;
