import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Child from './component/child'

function App() {

  console.log("app render")
  const [count,setCount]=useState(0)

  return (
      <div>
        <h2>Count of number : {count}</h2>
        <br />
        <button>+</button>
        <button>-</button>
      </div>
  )
  
}

export default App
