// import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app__header'>
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path="/cs/load" element={<div>CS Main</div>} />
        <Route path="/cs/active-loads" element={<div>Active Loads</div>} />
        <Route path="/cs/loads-report" element={<div>Loads Report</div>} />
        <Route path="/cs/search" element={<div>Search</div>} />
      </Routes>
    </>
  )
}

export default App
