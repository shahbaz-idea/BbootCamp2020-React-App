import React, { useState } from 'react';
//import React from 'react';
import './App.css';
import CounterContext from './CounterContext';
//import Dinner from './Dinner';
//import Family from './Family';
//import Message from './Mesage';
import Parent from './Parent';

export default function App() {
   //let [count, setCount] = useState(1); 
   let countState = useState(1);
  
  return (
    <CounterContext.Provider value={countState}>
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
      {/* <Message counter={count} />
      <br/>
      <button onClick={ () => setCount( ++count
        ) } >Update Counter</button> */}
      <Parent name="Zain" />
    </div></div>
    </CounterContext.Provider>
  );
}

//export default App;
