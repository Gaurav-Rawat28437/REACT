import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { mycontect } from "../App"

function Product() {

  const [products, setProducts] = useState([])


  useEffect(() => {

    const getData = async () => {
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      setProducts(data.products)
    }

    getData()

  }, [])

 const {carts,setCarts}=useContext(mycontect)

// useEffect(() => {
//   console.log(carts);
// }, [carts]);
 

  return (

    <div className="p-10 grid grid-cols-4 gap-6 bg-gray-100 mt-10">

      {products.map((item)=>{

        return(

          <div key={item.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">

            <img 
              src={item.thumbnail} 
              alt="" 
              className="h-40 w-full object-cover rounded-lg"
            />

            <h3 className="mt-3 font-bold text-lg">{item.title}</h3>

            <p className="text-gray-600 font-semibold">${item.price}</p>

            <div className="flex gap-3 mt-4">

              <button 
                onClick={()=>{

                    const filterItem=carts.find((cp)=>{
                        return cp.id==item.id
                    })

                    if(filterItem)
                    {
                        const setquantity=carts.map((p)=>{
                          return p==filterItem?{...p,quantity:p.quantity+1}:p
                          
                        })
                        setCarts(setquantity)
                    }
                    else
                    {
                        setCarts([...carts,{...item,quantity:1}])
                        
                    }
                    console.log("add button click")
                   
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>

              <button 
              disabled={!carts.some(p=>p.id==item.id)}
                onClick={()=>{
                  
                  
                   const filterItem=carts.find((cp)=>{
                        return cp.id==item.id
                    })

                    if(filterItem.quantity>1)
                    {
                      
                          const kyaHiBolu=carts.map((p)=>{
                            return p==filterItem?{...p,quantity:p.quantity-1}:p
                            
                          })
                          setCarts(kyaHiBolu)
                        
                    }
                    else
                    {
                        const filterCarts=carts.filter((p)=>{
                          return p!=filterItem
                        })

                        setCarts(filterCarts)
                        
                    }
                    console.log("remove button click")

                }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 disabled:bg-gray-300"
              >
                Remove
              </button>

            </div>

          </div>

        )

      })}

    </div>
  )
}

export default Product