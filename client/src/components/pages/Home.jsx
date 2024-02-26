import contents from '../content';
import Products from '../Products/Products';

function Home() {
  return (
    <div className='App'>
    {contents.map(contents => (
        <Products 
            key={contents.id}
            imagen={contents.imagen}
            nombre={contents.nombre}
            precio={contents.precio}
            nroserie={contents.nroserie}
            descripcion={contents.descripcion}
            rating={contents.rating}
        />
    ))}
</div>
    
  )
}

export default Home