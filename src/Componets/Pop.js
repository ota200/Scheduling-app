import '../App.css';
import { useState } from 'react';


export default function Pop() {

  const [word,setWord] = useState([])

  const [input,setInput] = useState("")

  const [text,setText] = useState("")


  function submit(e) {
    e.preventDefault();

    setWord(...word, [{
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

            <form >
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

              <button onClick={submit()} ></button>

            </form>
          </div>
          <div>
            {word.id}
          </div>
      </div>
  );
}

