import React from 'react'
import { useParams } from 'react-router-dom'
function Card() {
    const {name}=useParams()
  return (
    <div>
      <h1> hello  {name} </h1>
    </div>
  )
}

export default Card
