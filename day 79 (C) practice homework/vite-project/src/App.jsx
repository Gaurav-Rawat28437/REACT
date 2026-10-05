import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'


function App({data}) {

  

  return (
    <>
    <Navbar/>

    <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/search/:name' element={<Card />}/>
    </Routes>

  
     
    </>
  )
}

export default App
