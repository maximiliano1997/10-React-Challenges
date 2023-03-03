import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import ScotchInfoBar from "./ScotchInfoBar"


export function Test() {
    /** MOST OF YOUR CODE GOES HERE  */
    const [name, setName] = useState('Empty')
    const [age, setAge] = useState(0)


    return (
        <div className="App">
            <div>
             <h2>Update data from an Input</h2>
            </div>

            {/* Display Data */}
            <div className="input-display">
                <p>Display Name: {name}</p>
                <p>Display Age: {age}</p>
            </div>


            {/* Collect User Inputs */}
            <div className="inputs">
                {/* Input Name */}
               <div className="name">
                 <label className="name">Name: </label> <br/>
                <input type="text" placeholder="Tutaon" onChange={(e) => setName(e.target.value)}/>
               </div>

               {/* Input Age */}
               <div className="age">
                <label className="age">Age: </label> <br/>
                <input type="number" placeholder="45" onChange={(e) => setAge(e.target.value)}/>
               </div>
            </div>

        </div>
        
    )
}