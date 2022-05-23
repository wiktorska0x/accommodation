import { useState, useEffect } from 'react';
import PlacesList from './PlacesList';
import './Home.css'

const Home = () => {

    const [mieszkania, setPlaces] = useState(null);

    const handleDelete = (id) => {
        const newPlaces = mieszkania.filter(mieszkanie => mieszkanie.id !== id);
        setPlaces(newPlaces);
    }

    useEffect(() => {
        fetch('http://localhost:8000/mieszkania')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPlaces(data);
            });

    }, []);

    return ( 
        <div className="home">
            {mieszkania && <PlacesList mieszkania={mieszkania} handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Home;