import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import Register from './components/Register'
import {Navigate, Route, Routes} from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import PublicRoute from './auth/PublicRoute'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Navigate to={"/login"}/>}/>

      {/* Public Route */}
      <Route path='/login' element={ <PublicRoute> <Login/> </PublicRoute>}/>
      <Route path='/register' element={<Register/>}/>

      {/* Protected Rooutes */}
      <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>


      {/* Not found */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
