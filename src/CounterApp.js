import React, { useState } from 'react';



function CounterApp() {
//let numCounter = 0
// Declare a new state variable -> "numCounter"
let [numCounter, setCount ] = useState(0)

let increaseValue = () => {
    // function to increase the value
    
    } 
    let decreaseValue = () => {
    // function to decrease the value
    // condition to ensure the count stays a positive number 
    }
    let resetValue = () => {
    // function to reset the value to 0
    };
return (
<div>
<h1> {numCounter} </h1>

<button onClick={increaseValue}>+</button>
<button onClick={decreaseValue}>-</button>
<button onClick={resetValue}>Reset</button>
</div>//Assign onclick values to buttons
)
}
export default CounterApp;