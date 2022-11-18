
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home.jsx'
import Character from './views/Character.jsx'
import NotFound from './views/NotFound.jsx'

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
          <Route path='/:name' element={<Character />}></Route>
            <Route path='/' element={<Home />}></Route>  
            <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
