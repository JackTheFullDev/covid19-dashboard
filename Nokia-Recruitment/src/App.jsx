import { useEffect, useState } from 'react'
import './App.css'


//routes
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PageNotFound } from './pages/PageNotFound'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
