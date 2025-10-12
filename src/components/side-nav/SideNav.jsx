import { Link, useLocation } from 'react-router-dom';
import './SideNav.scss';
import homeIcon from '/public/nav-icons/home-icon.png';
import formIcon from '/public/nav-icons/form-icon.png';
import activeLoadsIcon from '/public/nav-icons/active-loads-icon.png';
import reportIcon from '/public/nav-icons/report-icon.png';
import searchIcon from '/public/nav-icons/search-icon.png';

function SideNav() {
    const location = useLocation();

    return (
        <div className="side-nav">
            <Link className={`side-nav__page-link ${location.pathname === "/cs/autoclave/" || location.pathname === "/" ? "side-nav__page-link--active" : ""}`}
                to="/cs/autoclave/"
            >
                <img className='side-nav__page-link-icon' src={homeIcon} alt="home icon" />
                <label className='side-nav__page-link-label'>Home</label>
            </Link>
            <Link className={`side-nav__page-link ${location.pathname === "/cs/autoclave/load-entry" ? "side-nav__page-link--active" : ""}`}
                to="/cs/autoclave/load-entry"
            >
                <img className='side-nav__page-link-icon' src={formIcon} alt="load entry icon" />
                <label className='side-nav__page-link-label'>Load Entry</label>
            </Link>
            <Link className={`side-nav__page-link ${location.pathname === "/cs/autoclave/active-loads" ? "side-nav__page-link--active" : ""}`}
                to="/cs/autoclave/active-loads"
            >
                <img className='side-nav__page-link-icon' src={activeLoadsIcon} alt="active loads icon" />
                <label className='side-nav__page-link-label'>Active Loads</label>
            </Link>
            <Link className={`side-nav__page-link ${location.pathname === "/cs/autoclave/loads-report" ? "side-nav__page-link--active" : ""}`}
                to="/cs/autoclave/loads-report"
            >
                <img className='side-nav__page-link-icon' src={reportIcon} alt="loads report icon" />
                <label className='side-nav__page-link-label'>Loads Report</label>
            </Link>
            <Link className={`side-nav__page-link ${location.pathname === "/cs/autoclave/search" ? "side-nav__page-link--active" : ""}`}
                to="/cs/autoclave/search"
            >
                <img className='side-nav__page-link-icon' src={searchIcon} alt="search icon" />
                <label className='side-nav__page-link-label'>Search</label>
            </Link>
        </div>
    );
}

export default SideNav;
