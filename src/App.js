import React, { useState } from 'react';
import './App.css';
//import Dinner from './Dinner';
//import Family from './Family';
import Message from './Mesage';

export default function App() {
  let [count, setCount] = useState(1); 
  return (
    <div className="App">
      <div className="App-header">
      {/* <h1>I Love my Family!</h1> 
      <Family/> */}
      {/* <h1>I Love Food!</h1>
      <hr/>
      <Dinner dishName="Biryani" sweetDish="Kheer" />
      <hr/>
      <Dinner dishName="Nehari" sweetDish="Gajrela" />
      <hr/>
      <Dinner dishName="Karahi" sweetDish="Russ Malai" /> */}
      {/* <h1>Value of counter variable is: {count}</h1> */}
      <Message counter={count} />
      <br/>
      <button onClick={ () => setCount( ++count
        ) } >Update Counter</button>
    </div></div>
  );
}

//export default App;
