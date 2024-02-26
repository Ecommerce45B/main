// import './App.css'
import { Route, Routes } from "react-router-dom";

import Header from "../src/Components/Header/Header"
// import Products from "./components/Products/Products";

// import {Home, About, Services} from "./components/pages"
import Landing from './Components/Landing/Landing'
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Category from "./Components/pages/Category"
import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact"
import Budget from "./Components/pages/Budget";
import Brands from "./Components/pages/Brands";
import Profile from "./Components/Profile/Profile"
import Faq from "./Components/pages/Faq/Faq"
import Detail from "./Components/Detail/Detail"

function App() {

  return (
    <>
      {/* <Filter /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
 
    </>
  ) 
}

export default App
