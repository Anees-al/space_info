import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AstreoidFinder from './pages/AstreoidFinder'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/'   element={<Home/>}/>
        <Route path='/astreoidfinder'  element={<AstreoidFinder/>}/>
      </Routes>
    </div>
  )
}

export default App
