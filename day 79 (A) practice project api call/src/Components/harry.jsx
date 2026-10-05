import React , { useEffect, useState } from "react"




function Harry(){

    const [data,setData]=useState([])

    useEffect(()=>{
         
            const getData=async (params) => {
                let res=await fetch("https://hp-api.onrender.com/api/characters")
                let data= await res.json()
                setData(data)
                
            }

            getData()
     }, [])
    

    return(
        
    
     <div className="p-6 text-center">

      <h2 className="text-2xl font-bold mb-6">Harry Potter Characters</h2>

      <div className="grid grid-cols-4 gap-4">

        {data.map((item, index) => (
          <div key={index} className="bg-black text-white p-3 rounded ">
           
            <img 
              src={item.image} 
              alt={item.name}
              className="h-40 w-full object-contain rounded mb-2"
            />

            <p className="font-semibold">{item.name}</p>


          </div>
        ))}

      </div>

    </div>

        
        
    )
}
export default Harry