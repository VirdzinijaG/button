import React from "react";
import './button.css';
import { useState } from 'react';


function App() {

    const [count, setCount] = useState(4);

    function decrementCount() {
        setCount(count - 1)
    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={decrementCount} className='minus'>-</button>
            <span>{count}</span>
            <button onClick={incrementCount} className='plus'>+</button>
        </div>
    )
}

export default App;