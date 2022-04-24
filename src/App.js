import { useState } from 'react';
import './App.css';


export default function Notes() {

  const [week,setWeek] = useState([])

  const [input,setInput] = useState("")
  
  const [text,setText] = useState("")
  

  function submit(e) {
    e.preventDefault();
  
    setWeek(...week, [{
      id: week.length, 
      title: input, 
      words: text


  
    }])


  }
  
  return (
    <div >

      <div>
        <form >

          <input id="input" onChange={(e)=> setInput(e.target.value)} required></input>

          <br></br>

          <textarea id="text" onChange={(e)=> setText(e.target.value)} required></textarea>

          <br></br>

          <label>mon<input type="checkbox" id="mon"></input></label>
          <label>tue<input type="checkbox" id="tue"></input></label>
          <label>wed<input type="checkbox" id="wed"></input></label>
          <label>thur<input type="checkbox" id="thur"></input></label>
          <label>fri<input type="checkbox" id="fri"></input></label>
          <label>sat<input type="checkbox" id="sat"></input></label>
          <label>sun<input type="checkbox" id="sun"></input></label>
          <h1>If none of checkboxes clicked its put for everyday automatically</h1>
          <br></br>

          <input type="submit" onClick={submit} required></input>

        </form>
      </div>
        <div>
          <div>
            {week.map((item, index) => (
              <div key={index}>
                <h1>{item.title}</h1>
  
              </div>
            ))}
          </div>
          Title:{input}
          Words:{text}
        </div>

    </div>
  );
}

