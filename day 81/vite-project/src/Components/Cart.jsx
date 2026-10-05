import React, { useContext } from 'react'
import { myContext } from '../App'

function Cart() {

    const {cartArr,setArr}=useContext(myContext)
   

  return (
     <div className="p-10 grid grid-cols-4 gap-6">

      cart
        

    </div>
  )
}

export default Cart
