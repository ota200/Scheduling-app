import '../App.css';
import Draggable from 'react-draggable';
import { useState } from 'react';

import Week from './week'

export default function Pop() {

  const [word,setWord] = useState([])

  const [input,setInput] = useState("")

  const [text,setText] = useState("")


  function name(e) {
    e.preventDefault();

    setWord([{
      id: word.length, 
      title: input, 
      words:text,
      mon:e.target.id.value

    }])
  }

  return (
      <div>
          <Week tue="heikhejoiuh"/>

          <div>

            <form  onSubmit={name} >
              <input id="input"></input>
              <br></br>
              <textarea id="text" onChange={(e)=> setText(e.target.value)}></textarea>
              <br></br>
              <label>mon<input type="checkbox" id="mon"></input></label>
              <label>tue<input type="checkbox" id="tue"></input></label>
              <label>wed<input type="checkbox" id="wed"></input></label>
              <label>thur<input type="checkbox" id="thur"></input></label>
              <label>fri<input type="checkbox" id="fri"></input></label>
              <label>sat<input type="checkbox" id="sat"></input></label>
              <label>sun<input type="checkbox" id="sun"></input></label>

              <br></br>

              <button >Submit</button>

            </form>
          </div>
          <div>
            {word.mon}
          </div>
      </div>
  );
}

