const PlacesList = ({ mieszkania }) => {

    return (
        <div className="places-list">
            {mieszkania.map((mieszkanie) => (
                <div className='places-review' key={mieszkanie.id}>
                    <img src={mieszkanie.img} alt="img" className="photo"></img>
                    <h2>{mieszkanie.tytul}</h2>
                    <p>{mieszkanie.cena} zł / doba</p>
                    {/* <button onClick={() => handleDelete(mieszkanie.id)}>delete this</button> */}
                </div>
            ))}
        </div>
    );
}

export default PlacesList;