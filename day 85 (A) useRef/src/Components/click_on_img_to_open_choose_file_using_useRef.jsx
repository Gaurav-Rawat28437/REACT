import React, { useRef, useState } from 'react'

function Click_on_img_to_open_choose_file_using_useRef() {

    const imgRef=useRef()
    const [returnRef ,setReturnRef]=useState([])
  return (
    <div>
      <div  >
        <img 
        onClick={()=>{
           imgRef.current.click()
           
            
        }}
          className='w-50 h-50 object-contain' 
          src={returnRef}
        />

        <input
        onChange={(e)=>{
            const v=e.target.files[0]
            console.log(v)
            const url=URL.createObjectURL(v)
            console.log(url)
            setReturnRef(url)
        }} 
          ref={imgRef}
         className='hidden'
          type="file" />


      </div>
    </div>
  )
}

export default Click_on_img_to_open_choose_file_using_useRef
