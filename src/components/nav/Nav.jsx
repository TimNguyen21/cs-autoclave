import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    const location = useLocation();

    return (
        <>
            <div className='nav'>
                <div className='nav__title'>Central Services - Autoclave</div>
                <div className='nav__links'>
                    <Link className={`nav__link ${location.pathname === "/cs/autoclave/load-entry" ? "nav__link--active" : ""}`} 
                        to="/cs/autoclave/load-entry">Load Entry</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/autoclave/active-loads" ? "nav__link--active" : ""}`} 
                        to="/cs/autoclave/active-loads">Active Loads</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/autoclave/loads-report" ? "nav__link--active" : ""}`} 
                        to="/cs/autoclave/loads-report">Loads Report</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/autoclave/search" ? "nav__link--active" : ""}`} 
                        to="/cs/autoclave/search">Search</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;
