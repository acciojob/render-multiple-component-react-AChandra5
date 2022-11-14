import React, {Component, useState} from "react";
import '../styles/App.css';
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";

const App = () => {
  return (
    <div id="main">
      <Project1 />
      <Project2 />

    </div>
  )
}


export default App;
