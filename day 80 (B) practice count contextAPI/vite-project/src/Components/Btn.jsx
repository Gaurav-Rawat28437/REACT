import React, { useContext } from 'react'
import { myCountContext } from '../App'

function Btn() {

  const { count, setCount, text, setText } = useContext(myCountContext)

  return (
    <div className='h-screen w-[50vw] flex flex-col justify-center items-center gap-6 bg-gray-900 text-white'>

      <div className='flex gap-4'>
        <button onClick={()=>setCount(count+1)} className='bg-green-600 px-6 py-2 rounded'>+</button>
        <button onClick={()=>setCount(0)} className='bg-gray-600 px-6 py-2 rounded'>Reset</button>
        <button onClick={()=>{ if(count<=0)return; setCount(count-1)}} className='bg-red-600 px-6 py-2 rounded'>-</button>
      </div>

      <input
        type="text"
        placeholder="write something"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="border border-gray-500 bg-gray-800 px-4 py-2 rounded w-64 text-white"
      />

    </div>
  )
}

export default Btn