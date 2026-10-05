import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Harry from './Component/Harry'
import User from './Component/User'
import Navbar from './Component/Navbar'
function App() {
 

  return (
    <>
    <Navbar />
      <Routes>

          <Route path='/Harry' element={<Harry />}></Route>
          <Route path='/User' element={<User />}></Route>


      </Routes>
    </>
  )
}

export default App
