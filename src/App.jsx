// import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import Load_Entry from './containers/load-entry/Load_Entry.jsx';
import './App.scss';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app__header'>
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path="/cs/autoclave/load-entry" element={<Load_Entry />} />
        <Route path="/cs/autoclave/active-loads" element={<div>Active Loads</div>} />
        <Route path="/cs/autoclave/loads-report" element={<div>Loads Report</div>} />
        <Route path="/cs/autoclave/search" element={<div>Search</div>} />
      </Routes>
    </>
  )
}

export default App;
