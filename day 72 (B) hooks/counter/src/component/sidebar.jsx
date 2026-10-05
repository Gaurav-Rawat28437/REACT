import React, { useState } from "react"

function Side()
{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    return (

        <aside
        onMouseEnter={()=>{
            setIsSidebarOpen(true)
        }}
        onMouseLeave={()=>{
            setIsSidebarOpen(false)
        }}
        
        className={`h-screen bg-gray-900 text-white p-4 flex flex-col gap-6} + (isSidebarOpen ? "w-48" : "w-16")}`}>

            <a href="" className="flex items-center gap-3 hover:text-gray-300">
                <span>🏚️</span>
                <span>{isSidebarOpen && "HOME"}</span>
            </a>

            <a href="" className="flex items-center gap-3 hover:text-gray-300">
                <span>🧑‍💻</span>
                <span>{isSidebarOpen && "MODULE"}</span>
            </a>

            <a href="" className="flex items-center gap-3 hover:text-gray-300">
                <span>👤</span>
                <span>{isSidebarOpen && "PROFILE"}</span>
            </a>

        </aside>

    )
}
export default Side