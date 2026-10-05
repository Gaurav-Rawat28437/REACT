import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { mycontect } from '../App'

function Navbar() {
  const {carts}=useContext(mycontect)
  
  let totalItem=0
  for(let item of carts)
  {
    totalItem+=item.quantity
  }

  return (

    <nav className="fixed top-0 w-screen flex justify-between items-center px-10 py-4 bg-gray-900 text-white">

        <h3 className="text-2xl font-bold">LOGO</h3>

        <div className="flex gap-6">

            <NavLink
              to="/product"
              className={({isActive}) =>
                isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"
              }
            >
              Product
            </NavLink>

            <div className='flex relative  '>
              
              <NavLink
                to="/cart"
                className={({isActive}) =>
                  isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"
              }
              >
                Cart
              </NavLink>
              <div
               className={(totalItem==0)?"":"w-5 h-5 bg-red-500 rounded-full flex items-center  justify-center text-white absolute top-[-5px] right-[-22px]"}
               >
                {totalItem==0?"":(totalItem)}
              </div>
           
            
            </div>

        </div>

    </nav>

  )
}

export default Navbar