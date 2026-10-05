
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import { useState } from 'react'

import { createContext } from 'react'
export const myContext=createContext()

function App() {

  const [cartArr,setArr]=useState([])
  

  return (
   
    <>
      <myContext.Provider value={{cartArr,setArr}}>

        <Navbar />

          <Routes>

            <Route path='/' element={<Product />}></Route>
            <Route path='/Product' element={<Product />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>


          </Routes>
      
      </myContext.Provider>
    </>
  )
}

export default App
