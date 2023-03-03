import React, {useState} from 'react';
import ReactDOM from 'react-dom';



function Counter() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="counter-component">
            <button className="increment" onClick={increment}>Increment</button>
            <div className="counter">{counter}</div>
            <button className="decrement" onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter