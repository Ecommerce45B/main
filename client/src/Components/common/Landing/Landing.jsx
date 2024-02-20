import styles from './Landing.module.css'
import wallpaper from '/wallpaper.jpg'

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={wallpaper} className={styles.img} alt="Error 404"/>
        <div className={styles.right}></div>
      </div>      
    </>
  )
}

export default Landing
