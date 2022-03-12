import '../App.css';
import { useState } from 'react';

function Time() {
    
    const [times,setTime] = useState("")

    function getTimes(e) {
        setTime(e.target.value)
    }


    return (
        <div>
            
            <form >
                <input type="time" value={times} onChange={getTimes} ></input>
            </form>

            <h1>{times}</h1>
        </div>
    );

}
  

export default Time;