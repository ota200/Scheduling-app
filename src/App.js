import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState({
    words:"",
    dates:"",
    times:""
  })

  const [array,setArray] = useState([])

  function getValues(e) {
    const value = e.target.value
    setInput({
      ...input,
      [e.target.id]: value
    })
  }

  function submit(e) {
    e.preventDefault() 
    setArray( array=> [ ...array,[input.words,input.dates,input.times]])
  }
  return (
    <div>
      <div>
        <form onSubmit={e => submit(e)}>
          <input id="words" onChange={e=>getValues(e)} required></input>

          <input id="dates" type="date" onChange={e=>getValues(e)} required></input>

          <input id="times" type="time" onChange={e=>getValues(e)}  ></input>


          <label>

          </label>

        </form>
      </div>
      <div>

        <p>{input.words}</p>
        <p>{input.dates}</p>
        <p>{input.times}</p>
        <div>
          {array.map((arra) =>
              <li ><a key={arra} id={arra}>{arra}</a></li>
          )}
        </div>


      </div>
    </div>
  );
}

export default App;
