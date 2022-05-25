import './Header.css'
import logo from './img/logo.png';
import { useHistory } from "react-router-dom";

function Header() {
    
    const history = useHistory();
    const rejestracja = () => {
        history.push("/Rejestracja")
    }
    const main = () => {
        history.push("/")
    }
    
    
    return (

        <div className='header'>
            <button className='logo' onClick={main}>
            <img 
            src={logo}
            className='header__logo' 
            alt=''/>
            </button>

            <div className='header__center'>
                <input type='text' />
                <button className='search__button'>O</button>
            </div>

            <div className='header__right'>
                <p>Korzystaj ze wszystkich możliwości</p>
                <button className='log__button' onClick={rejestracja}>Dołącz do nas</button>
            </div>
        </div>

    )
}

export default Header