// import './App.css'
import { Route, Routes } from "react-router-dom";
import contents from './Components/content'

import Header from "../src/Components/Header/Header"
import Products from "./Components/Products/Products";

// import {Home, About, Services} from "./Components/pages"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact"
import Budget from "./Components/pages/Budget";
import Brands from "./Components/pages/Brands";

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
