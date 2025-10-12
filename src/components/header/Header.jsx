import './Header.scss';

function Header() {

    return (
        <header className='header'>
            <img className='header__logo' src='/allosource-logo.png' alt='AlloSource Logo' />
            <label className='header__title'>Central Services - Autoclave</label>
        </header>
    )
}

export default Header;
