import { useState } from "react";

function Counter(){
    const  [counter, setcounter] = useState(0)
    function inCount(){
        setcounter(counter+1)
        
    }

    return(
        <div>
            <h3> Count : {counter} </h3>
            <button onClick={inCount}>Add 1</button>
        </div>
    )
    
}

export default Counter;