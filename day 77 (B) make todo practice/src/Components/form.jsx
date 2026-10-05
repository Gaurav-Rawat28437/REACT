import React, { useState } from 'react'
import toast from "react-hot-toast"

const Form = ({ todos, setTodos }) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <div className="w-1/2 h-full flex items-center justify-center bg-gray-100">

      <div className="w-[85%] max-w-md bg-white p-6 rounded-xl shadow-lg space-y-5">

        <h2 className="text-2xl font-semibold">Add Task</h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="text-sm">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter title"
            className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-sm">Description</label>
          <textarea
            rows="3"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="Enter description"
            className="px-3 py-2 border rounded-lg outline-none resize-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        {/* Button */}
        <button
          onClick={()=>{
            if(title.trim().length===0 || desc.trim().length===0)
            {
              toast.error("Please enter all fields")
              return
            }

            setTodos([...todos,{title:title.trim(),desc:desc.trim()}])

            setTitle("")
            setDesc("")
          }}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Add Task
        </button>

      </div>

    </div>
  )
}

export default Form