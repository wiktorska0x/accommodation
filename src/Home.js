import { useState, useEffect } from 'react';
import PlacesList from './PlacesList';
import './Home.css'

const Home = () => {

    const [mieszkania, setPlaces] = useState(null);


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
            {mieszkania && <PlacesList mieszkania={mieszkania} />}
        </div>
    );
}

export default Home;