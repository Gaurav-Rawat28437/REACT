import React, { useState } from 'react'
import Navbar from './Components/navbar'
import Form from './Components/form'
import Display from './Components/display'
import { Toaster } from "react-hot-toast"

const App = () => {

  const [darkMode, setDarkMode] = useState(false)
  const [todos, setTodos] = useState([])

  return (
    <div className={`h-screen flex flex-col ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>

      <Toaster />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex flex-1">
        <Form todos={todos} setTodos={setTodos} />
        <Display todos={todos} setTodos={setTodos} />
      </div>

    </div>
  )
}

export default App