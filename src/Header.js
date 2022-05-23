import './Header.css'
import logo from './img/logo.png';

function Header() {
    return (
        <div className='header'>
            <img 
            src={logo}
            className='header__logo' 
            alt=''/>

            <div className='header__center'>
                <input type='text' />
                <button className='search__button'>O</button>
            </div>

            <div className='header__right'>
                <p>Korzystaj ze wszystkich możliwości</p>
                <button className='log__button'>Zaloguj się</button>
            </div>
        </div>

    )
}

export default Header