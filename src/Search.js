import { useState } from 'react';
import List from './List';
import './Search.css'
import { TextField } from '@material-ui/core';


const Search = () => {


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

export default Search;