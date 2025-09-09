import { Link } from 'react-router-dom'
import './Nav.scss'

function Nav() {
    return (
        <>
            <div className='nav'>
                <li>
                    <Link to="/cs/load">Main</Link>
                </li>
                <li>
                    <Link to="/cs/active-loads">Active Loads</Link>
                </li>
                <li>
                    <Link to="/cs/loads-report">Loads Report</Link>
                </li>
            </div>
        </>
    )
}

export default Nav