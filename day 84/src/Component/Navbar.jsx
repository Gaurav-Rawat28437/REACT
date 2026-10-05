import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-8 py-4">

        <h2 className="text-2xl font-bold">
          CustomHooks
        </h2>

        <div className="flex gap-6 text-lg">

            <NavLink 
              to="/Harry"
              className={({isActive}) =>
                isActive
                ? "text-yellow-400 underline"
                : "hover:text-yellow-300"
              }
            >
              Harry
            </NavLink>

            <NavLink 
              to="/User"
              className={({isActive}) =>
                isActive
                ? "text-yellow-400 underline"
                : "hover:text-yellow-300"
              }
            >
              User
            </NavLink>

        </div>

    </nav>
  )
}

export default Navbar