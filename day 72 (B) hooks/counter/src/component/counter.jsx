import React, { useState } from "react"

function Counter()
{
    
//let count=0 // react wont update it value, React only re-renders when state changes, not normal variables.
const [count, setCount] = useState(0); // ✅ state =React only re-renders when state changes, not normal variables.


    return(
      
    <div className="h-screen flex items-center justify-center bg-gray-100">
  
  <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-72">
    
    <div>
      <h1 className="text-4xl font-bold mb-6">{count}</h1>
    </div>

    <div className="flex justify-between">
      <button
      onClick={()=>{
        setCount(count+1)
      }} 
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        +
      </button>

      <button
      onClick={()=>{
        setCount(0)
      }}
      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
      
        Reset
      </button>

      <button 
      onClick={()=>{
        if(count==0)return
        setCount(count-1)
      }}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
      
        -
      </button>
    </div>

  </div>

</div>
      
    )
}

export default Counter