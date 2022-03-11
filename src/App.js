import './App.css';
import { useState } from 'react';

export default function Notes() {
  
  const [addNote,setAddNote] = useState([])

  const [dates,setDate] = useState("")
  const [words,setWord] = useState("")
  const [times,setTime] = useState("")


  function getValue(e) {
    setWord(e.target.value)
  }

  function getText(e) {
      e.preventDefault();
      setAddNote([
          ...addNote,
          {
              id: addNote.length,
              name: words
          }
      ])
      setWord("")
  }

  function removeNote(id) {
      const newList = addNote.filter((notes) => notes.id !== id);
      setAddNote(newList);
  }

  function delList() {
      setAddNote([])
  }

  return (
      <div>
          <form onSubmit={getText}>
              <input value={words} onChange={getValue} ></input>
              <input type="date" value={words} onChange={getValue} ></input>
              <input type="time" value={words} onChange={getValue} ></input>

          </form>
          
          {addNote.map(notes =>(
              <>
                  <h1 key={notes.id} id={notes.id} >{notes.name}</h1>
                  <button onClick={() => removeNote(notes.id)}>Click to del</button>

              </>
          ))}

          <button onClick={delList}>Delate the whole list</button>

      </div>
  );
}


