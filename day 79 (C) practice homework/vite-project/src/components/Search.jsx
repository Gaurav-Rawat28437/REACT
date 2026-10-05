import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {

  const [data, setData] = useState("");
  const navigate=useNavigate()

  return (
    <div className="flex items-center gap-4 p-6">

      <label htmlFor="search" className="font-semibold text-lg">
        SEARCH
      </label>

      <input
        id="search"
        type="text"
        placeholder="Search what you want"
        className="border border-gray-400 px-4 py-2 rounded-md w-72 focus:outline-none focus:border-blue-500"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button
        onClick={() =>{
          navigate(`/search/:${data}`)
          
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Click
      </button>

    </div>
  );
}

export default Search;