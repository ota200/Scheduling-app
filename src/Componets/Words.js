import '../App.css';
import { useState } from 'react';

function Words() {
    
    const [word,setWord] = useState("")

    function getWord(e) {
        setWord(e.target.value)
    }


    return (
        <div>
            
            <form >
                <input value={word} onChange={getWord} ></input>
            </form>

            <h1>{word}</h1>
        </div>
    );

}
  

export default Words;