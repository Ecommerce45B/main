// import './App.css'
import { Route, Routes } from "react-router-dom";
import contents from './components/content'

import Header from "../src/components/Header/Header"
import Products from "./components/Products/Products";

// import {Home, About, Services} from "./components/pages"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import Budget from "./components/pages/Budget";
import Brands from "./components/pages/Brands";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
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
    </>
  )
}

export default App
