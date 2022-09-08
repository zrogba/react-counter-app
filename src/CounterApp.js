import React from 'react';
import { useState } from 'react';

function CounterApp() {
//let numCounter = 0
// Declare a new state variable -> "numCounter"
    let [numCounter, setCount ] = useState(0);
 // function to increase the value
    let increaseValue = () => {
    setCount((numCounter += 1)); //increases the count by 1
    }
    let decreaseValue = () => {
        // function to decrease the value
 // if condition is met, ensure the count stays a positive number 
    if (numCounter === 0) {
        alert("Should stay positive");
        } else {
        setCount((numCounter -= 1)); 
        }
    };
    // function to reset the value to 0   
    let resetValue = () => {
    setCount(0); //resets the count to 0

    };
return (
<div className='container'>


<button onClick={increaseValue}>+</button>
<h6> {numCounter} </h6>
<button onClick={decreaseValue}>-</button>
<button onClick={resetValue}>Reset</button>
</div>//Assign onclick values to buttons
)
}
export default CounterApp;