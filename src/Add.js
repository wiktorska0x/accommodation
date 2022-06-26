import './Add.css';
import axios from 'axios';
import { useState } from 'react';


function Add() {

    //   http://localhost:8000/mieszkania
    const url = "  http://localhost:8000/mieszkania";
    const [data, setData] = useState({
        lokalizacja: "",
        img: "",
        tytul: "",
        cena: ""
    })

    const submit = (e) => {
        e.preventDefault();
        axios.post(url, {
            lokalizacja: data.lokalizacja,
            img: data.img,
            tytul: data.tytul,
            cena: data.cena
            
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
            <p><h1>Zostań hostem i dołącz do społeczności Accommodation!</h1></p>
            <p><h2>Dodaj mieszkanie, które chciałbyś wynajmować.</h2></p>
            <div className='add__blok'>
                <form onSubmit={(e) => submit(e)}>

                    <div className='lok'>
                        <p>Lokalizacja</p>
                        <input onChange={(e) => handle(e)} id="lokalizacja" value={data.lokalizacja} name="lokalizacja" className='lok_input' placeholder="Lokalizacja"></input>
                    </div>

                    <div className='image'>
                        <p>Image</p>
                        <input  onChange={(e) => handle(e)} id="img" value={data.img} name="img" className='img_input' placeholder="Image"></input>
                    </div>

                    <div className='tytul'>
                        <p>Tytuł</p>
                        <input onChange={(e) => handle(e)} id="tytul" value={data.tytul} name="tytul" className='tytul_input' placeholder="Tytuł"></input>
                    </div>

                    <div className='cena'>
                        <p>Cena</p>
                        <input onChange={(e) => handle(e)} id="cena" value={data.cena} name="cena" className='cena_input' placeholder="Cena"></input>
                    </div>

                    <button type="submit" className='add'>Dodaj</button>

                </form>

            </div>
        </div>
    )
}

export default Add;
