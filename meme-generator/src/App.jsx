import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}/>
        
      </Routes>
       
    </div>
  )
}

export default App
