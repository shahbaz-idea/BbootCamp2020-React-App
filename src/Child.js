import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = (props) => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return(
        <div>
            {/* <h2>This is first child</h2>
            <h3>Name : {props.name}</h3> */}
            <h2>Using Counter Context</h2>
            <h3>Counter Value is: {counterValue[0]}</h3>
            {/* <button onClick={ () => console.log("Button Pressed") } >Increment</button> */}
            <button onClick={ () => {counterValue[1](++counterValue[0])} } >Increment Context</button>
        </div>
    )
}

export default Child;