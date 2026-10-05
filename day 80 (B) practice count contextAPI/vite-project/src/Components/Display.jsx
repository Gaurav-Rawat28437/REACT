import React, { useContext } from 'react'
import { myCountContext } from '../App'

function Display() {

  const { count, text } = useContext(myCountContext)

  return (
    <div className='h-screen w-[50vw] flex flex-col justify-center items-center gap-6 bg-gray-900 text-white'>

      <div className='text-5xl font-bold bg-gray-800 px-10 py-6 rounded'>
        {count}
      </div>

      <div className='text-2xl bg-gray-700 px-6 py-3 rounded'>
        {text}
      </div>

    </div>
  )
}

export default Display 