import React, { useRef, useState } from 'react'

function Increament_using_let_useState_useRef() {

    let a=0
  const [count, setCount] = useState(0)
  const countRef=useRef(0)

  return (
    <div>
      <div>

      <div>
        <h1>{a}</h1>
        <button
          onClick={()=>{
            a=a+1
            console.log(a)
          }}
        >increament let variable</button>
      </div>

      <div>
      <h1>{count}</h1>
      <button
        onClick={()=>{
          setCount(count+1)
          
        }}
        >increament count using useState</button>
      </div>

      <div>
        <h1>{countRef.current}</h1>
        <button
          onClick={()=>{
            countRef.current=countRef.current+1
            console.log(countRef)
          }}
        >
        increament countRef using useRef</button>
      </div>

     </div>
    </div>
  )
}

export default Increament_using_let_useState_useRef
