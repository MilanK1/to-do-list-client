import './App.css';
import React from 'react';
import List from './Components/list/List';
import Header from "./Components/header/Header"
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
<BrowserRouter>
    <div className="App">

        <div className="Header">
            <Header/>
        </div>
    <br/>

        <div className="List">
            <List/>
        </div>


    </div>
</BrowserRouter>
  );

}

export default App;
