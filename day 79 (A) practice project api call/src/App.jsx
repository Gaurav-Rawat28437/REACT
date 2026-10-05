import { Routes, Route } from 'react-router-dom'
import Harry from './Components/harry'
import User from './Components/user'
import Product from './Components/product'
import Navbar from './Components/navbar'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Harry />} />
        <Route path='/harry' element={<Harry />} />
        <Route path='/user' element={<User />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App