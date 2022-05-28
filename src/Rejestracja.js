import './Rejestracja.css';



function Rejestracja() {



    return (
        <div className='front'>

            <div className='reg__blok'>
                <form>

                    <div className='name'>
                        <p>Imię</p>
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

                    <button type="submit" className='reg'>Zarejestruj się</button>

                </form>

            

            </div>
        </div>
    )
}

export default Rejestracja;
