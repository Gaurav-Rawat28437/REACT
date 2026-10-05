import React from 'react'
import { useState } from 'react'

function Form() {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

  return (
    <main className="h-screen flex justify-center items-center bg-gray-200">

      <div className="bg-white p-8 rounded-lg shadow-lg w-80">

        <div className="flex flex-col mb-4">
          <label htmlFor="Username" className="font-semibold mb-1">
            Username
          </label>
          <input 
            id="Username"
            type="text"
            placeholder="enter username"
            className="border border-gray-400 p-2 rounded"

            onChange={(e)=>{
               setUsername(e.target.value)
            }}
            value={username}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="Password" className="font-semibold mb-1">
            Password
          </label>
          <input 
            id="Password"
            type="password"
            placeholder="enter password"
            className="border border-gray-400 p-2 rounded"

            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            value={password}
            
          />
        </div>

        <button 
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"

          onClick={()=>{
            console.log(`username logged in with ${username} and password ${password}`)
            setUsername("")
            setPassword("")
          }}
          
          >
          Click Me
        </button>
        
        
      </div>

    </main>
  )
}

export default Form