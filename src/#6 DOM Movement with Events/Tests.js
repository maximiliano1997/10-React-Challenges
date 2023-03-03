import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"


export function Test() {


    const [variable, setVariable] = useState(150);
    
    const handleMove = () => {
       setVariable(variable-10)
       return variable;
    }
    console.log(variable)

    return (
        <div className="App">
            <h1>Move the Box!</h1>

            <button onClick={handleMove}>Move Up</button>

            <div className="box" style={{
                transform: `translateY(${variable}px)`
            }}>.</div>
        </div>
    )
}