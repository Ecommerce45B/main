// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Landing from './Components/common/Landing/Landing'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </>
  ) 
}

export default App
