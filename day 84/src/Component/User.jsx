import React from 'react'
import { useFetch } from '../Hooks/useFetch'

function User() {
     const [data]=useFetch("https://dummyjson.com/users")
     const user = data?.users || []
     
     
  return (
    <div>
        
    {
        user.length>0?(
         user.map((item)=>{
            return(
                <h1 key={item.id}> {item.firstName}</h1>
            )
         }) 

        )
          :"no data"
    }

    </div>
  )
}

export default User
