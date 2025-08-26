import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import AdAdminLogin from "./pages/AdminLogin"
import AdminPost from "./pages/AdminPost"
import Notfound from "./pages/Notfound"

import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdAdminLogin/>}/>
      <Route path='/admin/post' element={<AdminPost/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  )
}

export default App
