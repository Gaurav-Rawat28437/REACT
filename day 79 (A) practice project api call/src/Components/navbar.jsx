import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-3">
      
      <h3 className="text-xl font-bold">Routes</h3>

      <div className="flex gap-6 justify-center items-center">
        <Link className="hover:text-gray-300" to="/harry">Harry</Link>

        <NavLink to={"/user"} className={({isActive})=>isActive?"hover:text-gray-300 underline text-xl":"hover:text-gray-300"}>Users</NavLink>

        {/* <Link className="hover:text-gray-300" to="/user">User</Link> */}
        <Link className="hover:text-gray-300" to="/product">Product</Link>
      </div>

    </nav>
  )
}

export default Navbar