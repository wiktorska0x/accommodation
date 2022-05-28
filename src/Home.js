import data from "./data/dbm.json"
import './Home.css'


const Home = () => {


    const setData = data.filter((el) => {

            return el;
        }
        )
    return (
        <div className="home">
             <ul>
            {setData.map((item) => (
            <div key={item.id}>
                <p><b>{item.tytul}</b></p>
                <img src={item.img} className="photo" alt='img'></img> 
                <p>{item.lokalizacja}</p>
                <p>{item.cena} zł / doba</p>
            </div>
        ))}
        </ul>
        </div>
    );
}

export default Home;