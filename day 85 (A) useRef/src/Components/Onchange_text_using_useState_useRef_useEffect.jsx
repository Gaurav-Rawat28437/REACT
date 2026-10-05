import React, { useEffect, useRef, useState } from 'react'

function Onchange_text_using_useState_useRef_useEffect() {
    const [text,setText]=useState("")
    const myRef=useRef(0)
    useEffect(()=>{
        myRef.current++
    })
  return (
    <div>
        <input 
          onChange={(e)=>{
            setText(e.target.value)
          }}
          type="text"
          value={text} 
          placeholder='"enter somethings' />

          <h1>{text}</h1>

          <h1>myRef value is {myRef.current}</h1>
    
    </div>
  )
}

export default Onchange_text_using_useState_useRef_useEffect
