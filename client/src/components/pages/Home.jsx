import contents from '../content'
import Products from "../Products/Products";

function Home() {
  return (
    <div className='App'>
      {contents.map(contents => (
          <Products 
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              totalSales={contents.totalSales}
              timeLeft={contents.timeLeft}
              rating={contents.rating}
          />
      ))}
    </div>
  )
}

export default Home