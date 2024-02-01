import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const render=()=>{
    let p=document.createElement("p");
    p.setAttribute("id","para");
    p.textContent="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    let main=document.getElementById("main");
    main.appendChild(p);  
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="Click" onClick={render}>Click</button>
    </div>
  );
}


export default App;
