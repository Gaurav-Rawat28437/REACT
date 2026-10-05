

import React, { useState, useEffect, useContext } from "react";
import { myContext } from "../App";
import Cart from "./Cart";

function Product() {

  const [data, setData] = useState([]);
  const {cartArr,setArr}=useContext(myContext)

  
  

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(result => setData(result.products));
  }, []);

  return (
    <div className="p-10 grid grid-cols-4 gap-6">

      {
        data.length==0?(
          <h1>Carts is empty</h1>
        ):data.map((item) => (

        <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg">

          <img 
            src={item.images[0]} 
            alt={item.title} 
            className="h-40 w-full object-cover"
          />

          <h4 className="text-lg font-bold mt-2">{item.title}</h4>

          <div className="flex items-center justify-between mt-3">

            <h5 className="text-green-600 font-semibold text-lg">
                ${item.price}
            </h5>

            <div className="flex gap-3">

                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={()=>{
                    setArr(prev=>[...prev,item])
                   
                  }}
                   
                >
                Add
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Remove
                </button>

            </div>

            </div>

        </div>

      ))}

    </div>
  );
}

export default Product;