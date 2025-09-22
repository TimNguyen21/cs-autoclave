import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import LoadEntry from './containers/load-entry/LoadEntry.jsx';
import ActiveLoads from './containers/active-loads/ActiveLoads.jsx';
import LoadsReport from './containers/loads-report/LoadsReport.jsx';
import Search from './containers/search/Search.jsx';
import './App.scss';

function App() {
  return (
    <>
      <div className='app__header'>
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path="/cs/autoclave/load-entry" element={<LoadEntry />} />
        <Route path="/cs/autoclave/active-loads" element={<ActiveLoads />} />
        <Route path="/cs/autoclave/loads-report" element={<LoadsReport />} />
        <Route path="/cs/autoclave/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App;
