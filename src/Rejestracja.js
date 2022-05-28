import './Rejestracja.css';
import tlo from './img/tlo.jpg';
import logo from './img/logo.png';
import { useHistory } from "react-router-dom";


function Rejestracja() {

    const history = useHistory();
    const home = () => {
        history.push("/");
    }

    return (
        <div className='front'>
            <img
                src={tlo}
                className='front__tlo'
                alt='' />

            <div className='reg__blok'>
                <form>

                    <div className='name'>
                        <p>Rodzaj</p>
                        <a class="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <input name="imie" className='imie_input' placeholder="Imie.."></input>
                    </div>

                    <div className='surname'>
                        <p>Nazwisko</p>
                        <input name="nazwisko" className='nazwisko_input' placeholder="Nazwisko.."></input>
                    </div>

                    <div className='email'>
                        <p>Adres e-mail</p>
                        <input name="email" className='email_input' placeholder="Email.."></input>
                    </div>

                    <div className='password1'>
                        <p>Hasło</p>
                        <input name="password1" className='password1_input' placeholder="Haslo.."></input>
                    </div>

                    <div className='password2'>
                        <p>Powtórz hasło</p>
                        <input name="password2" className='password2_input' placeholder="Powtorz haslo.."></input>
                    </div>

                    <button type="submit" className='reg'>Dodaj mieszkanie</button>

                </form>

                {/* <button className='logo'><img 
                src={logo} alt="logo" onClick={home} className="logo_btn"/></button> */}


            </div>
        </div>
    )
}

export default Rejestracja;
