import React from 'react'
import { useUserData } from '../Utility/context'
import { useNavigate } from 'react-router-dom'


function Login() {

  const {username,setUsername,password,setPassword,UserData}=useUserData()
  const navigate=useNavigate()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-80">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Username"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            type="text"
            value={username}
          />
        </div>

        <div className="mb-6">
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            value={password}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={()=>{
            
            if(username==UserData.username && password==UserData.password)
            {
              
              navigate("/Home")
            }
            else{

              navigate("/Login")
            }  
            setUsername("")
            setPassword("")
          }}
        >
          Login
        </button>

      </div>

    </main>
  )
}

export default Login