import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Product from './Component/Product'
import Cart from './Component/Cart'
import Navbar from './Component/Navbar'

import { createContext } from 'react'
export const mycontect=createContext()

function App() {
  const [carts,setCarts]=useState([])
 

  return (
    <>

    <mycontect.Provider value={{carts,setCarts}}>

    

      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} ></Route>
        <Route path='/Product' element={<Product />} ></Route>
        <Route path='/Cart' element={<Cart />} ></Route>
      </Routes>
    
    </mycontect.Provider>
    

    </>
  )
}

export default App
