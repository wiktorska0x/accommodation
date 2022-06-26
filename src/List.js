import data from "./data_search/dbm.json"
import './List.css';

function List(props) {

    const filteredData = data.filter((el) => {
        //bez inputu zwraca wszystko
        if (props.input === '') {
            return el;
        }
        //zwraca elementy powiazane z inputem
        else {
            return el.lokalizacja.toLowerCase().includes(props.input) 
        }
    })
    
    return (
        <div>
            <h1>Dostępne miejsca pobytu</h1>
        <div className="places-list">
        {filteredData.map((item) => (
            <div key={item.id}>
                <p><b>{item.tytul}</b></p>
                <img src={item.img} className="photo" alt='img'></img> 
                <p>{item.lokalizacja} <i>{item.cena} zł / doba</i></p>
            </div>
        ))}
        </div>
        </div>
    )
}

export default List