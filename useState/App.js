import React,{useState} from 'react';
import './App.css';

function App(){
    const[counter,setCounter]=useState(0);
    let increment=()=>{
        setCounter(counter+1);
    }
    let decrement=()=>{
        setCounter(counter-1);
    }
    return (
        <div className="app">
       
        <button onClick={increment}>+</button>
        <h1> {counter}   </h1>
        <button onClick={decrement}>-</button>
     
        </div>
    );
}

export default App;