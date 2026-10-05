import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white shadow-md">

        <h2 className="text-2xl font-bold tracking-wide">
          ProtectRoute
        </h2>

        <div className="flex gap-8 text-lg">

            <NavLink 
            to="/Home"
            className={({isActive}) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
            }
            >
              HOME
            </NavLink>

            <NavLink 
            to="/Profile"
            className={({isActive}) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
            }
            >
              PROFILE
            </NavLink>

            <NavLink 
            to="/Login"
            className={({isActive}) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
            }
            >
              LOGIN
            </NavLink>

        </div>

    </nav>
  )
}

export default Navbar