
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/Context.js'
import { useState, useEffect } from 'react'

import Home from './views/Home.jsx'
import Character from './views/Character.jsx'
import NotFound from './views/NotFound.jsx'



function App() {

  const [data, setData] = useState([])

  const globalState = { data }

  useEffect(() => {
    fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json)
    })
      .catch((e)=> console.log(e))
      
  }, [])


  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Routes>
          <Route path='/character/:name' element={<Character />}></Route>
            <Route path='/' element={<Home />}></Route>  
            <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  )
}

export default App
