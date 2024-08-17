
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  
  return (
    <>
      {/* <div className='bg-blue-400 flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
    <Routes>
      <Route path='navbar' element={ <Navbar/>}/>
      <Route path='home' element={ <Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
