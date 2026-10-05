import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { createContext } from 'react'
export const myContext=createContext()
import Child from './components/Child'

function App() {

  const [name,setname]=useState("gaurav")
  const [age,setage]=useState("20")



  return (
    
  <myContext.Provider value={{name,age}}>
    <div>
      <Child />
    </div>
  </myContext.Provider>
     
    
  )
}

export default App
