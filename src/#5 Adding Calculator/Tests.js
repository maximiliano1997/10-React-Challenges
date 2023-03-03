import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"


export function Test() {
    const [number, setNumber] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [resultado, setResultado] = useState(0)

   const handleClick = () => {
    const data = parseInt(number) + parseInt(numberTwo);
    console.log(data);
    return setResultado(data);
     
    }
    
    return (
        <div className="App">
            <h2>Adding Two Numbers</h2>

            <div className="inputs">
                <input type="number" placeholder="0" onChange={(e) => setNumber(e.target.value)}/>
                <input type="number" placeholder="0" onChange={(e) => setNumberTwo(e.target.value)}/>
            </div>
            <div className="btn">
                <button onClick={handleClick}>Add Them!</button>
                <h1 className="display-results">{resultado}</h1>
            </div>
        </div>
    )
}