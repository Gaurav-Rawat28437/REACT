import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Profile from './Component/Profile'
import Navbar from './Component/Navbar'
import { useUserData } from './Utility/context'
function App() {

  const {username,setUsername,password,setPassword, UserData}=useUserData()
  

  return (
    <>

    <Login/>

    <Routes>
      

      
      
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
      

          <Route path="/" element={<Login />}></Route>
          <Route path='/Login' element={<Login />}></Route>

    </Routes>
     
    </>
  )
}

export default App
