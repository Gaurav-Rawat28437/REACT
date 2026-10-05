import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increament_using_let_useState_useRef from './Components/increament_using_let_useState_useRef'
import Onchange_text_using_useState_useRef_useEffect from './Components/Onchange_text_using_useState_useRef_useEffect'
import Click_on_img_to_open_choose_file_using_useRef from './Components/click_on_img_to_open_choose_file_using_useRef'

function App() {
  return (
    <>
    <div >

     <Increament_using_let_useState_useRef />

     <br />

     <Onchange_text_using_useState_useRef_useEffect />

     <br />

     <Click_on_img_to_open_choose_file_using_useRef />
    
    </div>
    </>
  )
}

export default App
