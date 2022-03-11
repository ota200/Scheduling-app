import './App.css';
import { useState } from 'react';

export default function Notes() {
  
  const [addNote,setAddNote] = useState([])

  const [dates,setDate] = useState("")
  const [words,setWord] = useState("")
  const [times,setTime] = useState("")

  let T = true

  function getWords(e) {
    setWord(e.target.value)
  }

  function getDates(e) {
    setDate(e.target.value)
  }  
  
  function getTimes(e) {
    setTime(e.target.value)
  }

  function getText(e) {
      e.preventDefault();
      setAddNote([
          ...addNote,
          {
              id:addNote.length,
              wordsId: addNote.length + words,
              word: words,
              datesId: addNote.length + words,
              date: dates,
              TimesId: addNote.length + words,
              time: times

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
              <input value={words} onChange={getWords} ></input>
              <input type="date" value={dates} onChange={getDates} ></input>
              <input type="checkbox" ></input>

              <input type="time" value={times} onChange={getTimes} ></input>

          </form>
          
          {addNote.map(notes =>(
              <>
                  <h1 key={notes.wordsId} id={notes.id} >{notes.word} {notes.id}</h1>
                  <h1 key={notes.datesId} id={notes.id} >{notes.date} {notes.id}</h1>
                  <h1 key={notes.TimesId} id={notes.id} >{notes.time} {notes.id}</h1>

                  <button onClick={() => removeNote(notes.id)}>Click to del</button>

              </>
          ))}

          <button onClick={delList}>Delate the whole list</button>

      </div>
  );
}


