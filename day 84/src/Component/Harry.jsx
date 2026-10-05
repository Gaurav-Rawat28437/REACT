import React from 'react'
import { useFetch } from '../Hooks/useFetch'

function Harry() {
    const [data]=useFetch("https://hp-api.onrender.com/api/characters")
   
  return(
    <div>
    {
        data.length>0?

         data.map((item)=>{
            return(
                <h1 key={item.id}> {item.name}</h1>
            )
         }) 


          :"no data"
    }
    </div>
  )
}

export default Harry
