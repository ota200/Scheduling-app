import '../App.css';
import { useState } from 'react';

function Dates() {
    
    const [dates,setDate] = useState("")

    function getDates(e) {
      setDate(e.target.value)
    }

    return (
        <div>
            
            <form >
                <input type="date" value={dates} onChange={getDates} ></input>
            </form>

            <h1>{dates}</h1>
        </div>
    )

}
  

export default Dates;