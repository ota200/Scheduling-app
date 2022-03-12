import './App.css';
import Dates from'./Componets/Dates';
import Time from'./Componets/Time';
import Words from'./Componets/Words';
import Days from'./Componets/Days';

import { useState } from 'react';


export default function Notes() {
  const [word,setWord] = useState("")

  function getWord(e) {
    setWord(e.target.value)
  }



  return (
      <div>
          <Days />
          <Dates/>
          <Time/>

          <div>
            
            <form >
                <input value={word} onChange={getWord} ></input>
            </form>

            <h1>{word}</h1>
          </div> 
          <button >BUTTON</button>         

      </div>
  );
}


