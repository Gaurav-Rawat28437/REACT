import React, { useContext } from 'react'
import { myCountContext } from '../App'

function Display() {

  const { count } = useContext(myCountContext)

  return (
    <div className='h-screen w-[50vw] flex flex-col justify-center items-center'>

      <div className='text-5xl font-bold text-white bg-gray-800 px-10 py-6 rounded shadow-lg'>
        {count}
      </div>

    </div>
  )
}

export default Display