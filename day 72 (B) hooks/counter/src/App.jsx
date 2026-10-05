import { useState } from 'react'
import Counter from './component/counter'
import Side from './component/sidebar'


function App() {


  return (
    <>
    <main className="flex h-screen">
  
  <Side />

  <div className="flex-1 flex items-center justify-center">
    <Counter />
  </div>

</main>
    </>
  )
}

export default App
