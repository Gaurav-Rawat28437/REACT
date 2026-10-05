import React, { useContext } from 'react'
import { myContext } from '../App'
function Child() {
  const {name,age}=useContext(myContext)
  return (

    <div>
      my name is {name} and my age is {age}
    </div>
  )
}

export default Child
