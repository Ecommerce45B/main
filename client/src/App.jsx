// import './App.css'

import { Route, Routes, useLocation } from "react-router-dom"

// import {Home, About, Services} from "./Components/pages"
import Landing from './Components/Landing/Landing'
import Header from './Components/Header/Header'
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact/Contact"
import Budget from "./Components/pages/Budget"
import Brands from "./Components/pages/Brands"
import Profile from "./Components/Profile/Profile"
import Faq from "./Components/pages/Faq/Faq"
import Detail from "./Components/Detail/Detail"
import Carrito from "./Components/Carrito/Carrito"

function App() {

  const location = useLocation()

  return (
    <>
      {
        location.pathname !== '/' && <Header/>}
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/filter" element={<Filter />} /> */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
      </Routes>
    </>
  ) 
}

export default App
