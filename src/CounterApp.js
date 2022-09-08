import React, { useState } from 'react';



function CounterApp() {
//let numCounter = 0
// Declare a new state variable -> "numCounter"
let [numCounter, setCount ] = useState(0)
return (
<div>
<h1> {numCounter} </h1>
<button>+</button>
<button>-</button>
<button>Reset</button>
</div>
)
}
export default CounterApp;