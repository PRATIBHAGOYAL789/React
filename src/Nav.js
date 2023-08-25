import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import About from './About'
import Home from './Home'

export default function Nav() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/about'element={<About/>}/>
<Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
