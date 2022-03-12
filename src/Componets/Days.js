import '../App.css';
import { useState } from 'react';
import Words from'./Words';

function Days() {
    
    const [days,setDay] = useState({

        mon:false,
        tue:false,
        wed:false,
        thur:false,
        fri:false,
        sat:false,
        sun:false,

    })

    function week(e) {
        const d = e.target.id
        console.log(d)
        console.log(days[d])
        if (days[d] == false) {
            days[d] = true
        } else {
            days[d] = false
        }
        
    }

    const data = () => {
        setDay()
    }
    

    return (
        <div>
            <Words/>
            <div>
                
                <button id="mon" onClick={week}> Monday </button>
                <button id="tue" onClick={week}>Tuesday </button>
                <button id="wed" onClick={week}> Wendsday </button>
                <button id="thur" onClick={week}> Thursday </button>
                <button id="fri" onClick={week}> Friday </button>
                <button id="sat" onClick={week}> Saturday </button>
                <button id="sun" onClick={week}> Sunday </button>
                
                <button onClick={() => data()}></button>
            </div>
        </div>

    )

}
  

export default Days;

