import './App.css';
import { useState } from 'react';

function App() {



  //const [array,setArray] = useState([])
  const [words,setWords] = useState("")
  const [dates,setDates] = useState("")
  const [times,setTimes] = useState("")

  const [input, setInput] = useState([])




  function submit(e) {
    e.preventDefault() 

    setInput( input=> [ ...input,[words,dates,times]])

    console.log(input)
  }

  function getDates(e) {
    const value = e.target.value
    setDates(value)

  }  
  
  function getWords(e) {
    const value = e.target.value
    setWords(value)

  }
  
  function getTimes(e) {
    const value = e.target.value
    setTimes(value)
    
  }

  function del(e) {
    const b = e.target.id
    console.log(input)
    console.log(b)

    const newList = input.filter((arra) => arra !== b)
    setInput(newList)
  }

  /*function (e) {
    //setArray( array=> [ ...array,[input.words,input.dates,input.times]])
    setInput( input=> [ ...input,input])
    
  }*/

  /*function del(e) {
    
    //console.log(e.target.id)
    const a = e.target.id
    const b = e.target.name

    console.log(array[a[b]])
    //setArray(array.filter((arra) => arra !== b))
  }*/
/*
        <div>
          {array.map((items, inx) =>{
            return (
              <div>
                {items.map((subItems,ix) =>{
                  return (
                    <>
                    <li ><a key={inx}>Name: {subItems} Where in array: {inx} Where in sub array: {ix}</a></li>
                    </>
                  )
                })}
                <a id={inx} onClick={e=>del(e)}>X</a>

              </div>
              
            )
          })}
        </div>
          {array}
*/
  return (
    <div>
      <div>
        <form onSubmit={e => submit(e)}>
          <input id="words" onChange={e=>getWords(e)} required></input>

          <input id="dates" type="date" onChange={e=>getDates(e)} required></input>

          <input id="times" type="time" onChange={e=>getTimes(e)}  ></input>


          <label>

          </label>

        </form>
      </div>
      <div>

        <p>{words}</p>
        <p>{dates}</p>
        <p>{times}</p>

        <div>
          {input.map((items, inx) =>{
            return (
              <div>
                {items.map((subItems,ix) =>{
                  return (
                    <>
                    <li key={subItems}>{subItems}</li>
                    <a>X</a>
                    </>
                  )
                })}
                
                <button id={items} onClick={e => del(e)}>DEL</button>
          </div>
              
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
