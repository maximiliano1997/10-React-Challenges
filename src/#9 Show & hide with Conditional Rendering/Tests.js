import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './styles.css';
import Counter from './counter'


export function Test() {
    const [square, setSquare] = useState(false);
    return (
        <div className="App">
            <h2>Show & hide with Conditional Rendering</h2>

            <button className="btn" onClick={() => setSquare(!square)}>{square ? 'Hide' : 'Show'}</button>

            {square ? <div className="square"><Counter /></div> : null}
            
        </div>
    )
}


