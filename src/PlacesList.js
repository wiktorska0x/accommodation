const PlacesList = ({ mieszkania, handleDelete }) => {

    return (
        <div className="places-list">
            {mieszkania.map((mieszkanie) => (
                <div className='places-review' key={mieszkanie.id}>
                    <img src={mieszkanie.img} alt="img" className="photo"></img>
                    <h2>{mieszkanie.tytul}</h2>
                    <p>{mieszkanie.cena} zł / doba</p>
                    {/* <button className="hd--button" onClick={() => handleDelete(mieszkanie.id)}>Zarezerwuj</button> */}
                </div>
            ))}
        </div>
    );
}

export default PlacesList;