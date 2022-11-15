
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Context } from './context/Context.js'
import {useState, useEffect} from 'react'

import Home from './views/Home.jsx'
import Character from './views/Character.jsx'
import NotFound from './views/NotFound.jsx'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home /> }></Route>
        <Route path='/character/:name' element = { <Character /> }></Route>
        <Route path='*' element = { <NotFound /> }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
