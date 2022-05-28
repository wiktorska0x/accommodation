import './Rejestracja.css';
import axios from 'axios';
import { useState } from 'react';


function Rejestracja() {

    //   http://localhost:8000/users
    const url = "  http://localhost:8000/users";
    const [data, setData] = useState({
        imie: "",
        nazwisko: "",
        email: "",
        password: ""
    })

    const submit = (e) => {
        e.preventDefault();
        axios.post(url, {
            imie: data.imie,
            nazwisko: data.nazwisko,
            params: {
                email: data.email,
                password: data.password
            }
        })
        .then(res => {
            console.log(res.data);
        })
    }

    const handle = (e) => {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }


    return (
        <div className='front'>

            <div className='reg__blok'>
                <form onSubmit={(e) => submit(e)}>

                    <div className='name'>
                        <p>Imię</p>
                        {/* <a class="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a> */}
                        <input onChange={(e) => handle(e)} id="imie" value={data.imie} name="imie" className='imie_input' placeholder="Imie.."></input>
                    </div>

                    <div className='surname'>
                        <p>Nazwisko</p>
                        <input  onChange={(e) => handle(e)} id="nazwisko" value={data.nazwisko} name="nazwisko" className='nazwisko_input' placeholder="Nazwisko.."></input>
                    </div>

                    <div className='email'>
                        <p>Adres e-mail</p>
                        <input onChange={(e) => handle(e)} id="email" value={data.email} name="email" className='email_input' placeholder="Email.."></input>
                    </div>

                    <div className='password'>
                        <p>Hasło</p>
                        <input onChange={(e) => handle(e)} id="password" value={data.password} name="password" className='password_input' type="password" placeholder="Haslo.."></input>
                    </div>

                    <button type="submit" className='reg'>Zarejestruj się</button>

                </form>

            </div>
        </div>
    )
}

export default Rejestracja;
