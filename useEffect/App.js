import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import axios from "axios";

function App(){
const [data,setData]=useState();
useEffect(()=>{
  axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response)=>{
    setData(response.data[0].email);
  }
  )
})

return(
  <div>
    <h1> {data}</h1>
  </div>
);
}

export default App;