import content from '../content'
import Products from "../Products/Products";

function Home() {
  return (
    <div className='App'>
      {content.map(content => (
          <Products 
              key={content.id}
              id={content.id}
              image={content.image}
              name={content.name}
              price={content.price}
              totalSales={content.totalSales}
              timeLeft={content.timeLeft}
              rating={content.rating}
          />
      ))}
    </div>
  )
}

export default Home