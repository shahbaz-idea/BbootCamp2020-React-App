import React from 'react';
import './App.css';
import Dinner from './Dinner';
// import Family from './Family';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      {/* <h1>I Love my Family!</h1> 
      <Family/> */}
      <h1>I Love Food!</h1>
      <hr/>
      <Dinner dishName="Biryani" sweetDish="Kheer" />
      <hr/>
      <Dinner dishName="Nehari" sweetDish="Gajrela" />
      <hr/>
      <Dinner dishName="Karahi" sweetDish="Russ Malai" />
    </div></div>
  );
}

export default App;
