import { useState, useEffect } from 'react';
import List from './List';
import TextField from "@mui/material/TextField";
import './Search.css'


const Home = () => {


    const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

    return (
        <>
        <div className="search">
            <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Szukaj"
            />
        </div>
        <List input={inputText}/>
        
        </>
    );
}

export default Home;