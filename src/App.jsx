// import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/cs/loads">Main</Link>
          </li>
          <li>
            <Link to="/cs/active-loads">Active Loads</Link>
          </li>
          <li>
            <Link to="/cs/loads-report">Loads Report</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cs/loads" element={<div>CS Main</div>} />
        <Route path="/cs/active-loads" element={<div>Active Loads</div>} />
        <Route path="/cs/loads-report" element={<div>Loads Report</div>} />
      </Routes>
    </>
  )
}

export default App
