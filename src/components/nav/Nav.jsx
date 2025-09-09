import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    const location = useLocation();

    return (
        <>
            <div className='nav'>
                <div className='nav__title'>Central Services - Autoclave</div>
                <div className='nav__links'>
                    <Link className={`nav__link ${location.pathname === "/cs/load" ? "nav__link--active" : ""}`} 
                        to="/cs/load">Main</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/active-loads" ? "nav__link--active" : ""}`} 
                        to="/cs/active-loads">Active Loads</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/loads-report" ? "nav__link--active" : ""}`} 
                        to="/cs/loads-report">Loads Report</Link>
                    <Link className={`nav__link ${location.pathname === "/cs/search" ? "nav__link--active" : ""}`} 
                        to="/cs/search">Search</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;
