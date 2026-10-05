import { useState } from 'react'
import Card from './component/cards'
import Onsale from "./component/Onsale"

function App() {
  

  return (
    <>
    <div style={{display:"flex"}}>
      <Card img={"https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"} name={"Apple"} price={"120"} />

      <Card img={"https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"} name={"Banana"} price={"60"} />

      <Card img={"https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"} name={"Mango"} price={"150"} />

      <Onsale>
           <Card img={"https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"} name={"Orange"} price={"80"} />
      </Onsale>

      <Card img={"https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"} name={"Strawberry"} price={"200"} />

      <Card img={"https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"} name={"Kiwi"} price={"180"} />
    </div>
    
    </>
  )
}

export default App
