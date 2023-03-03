import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css"
import ScotchInfoBar from "./ScotchInfoBar"


export function Test() {
    
    const [phrase, setPhrase] = useState("");

    if (phrase == 'open sesame') {
        alert('welcome !!!')
    }


    return (
        <div className="App">
            <h2>What's the secret Phrase ?</h2>
            <input type="text" placeholder="Super duper secret" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
            <p>Hint, It's open sesame</p>
        </div>
    )
}