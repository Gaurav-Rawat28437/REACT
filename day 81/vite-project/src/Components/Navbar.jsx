import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-10 py-4">

      <h2 className="text-2xl font-bold">Practice</h2>

      <div className="flex gap-8">

        <NavLink 
        to="/Product"
        className={({isActive}) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-400"}
        >
          Product
        </NavLink>

        <NavLink 
        to="/Cart"
        className={({isActive}) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-400"}
        >
          Cart
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar