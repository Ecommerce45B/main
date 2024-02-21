// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Landing from './Components/Common/Landing/Landing'
import Home from "./Components/Common/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </>
  ) 
}

export default App
