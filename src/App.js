import './App.css';
import React from 'react';
import List from './Components/list/List';
import Header from "./Components/header/Header"

function App() {
  return (

    <div className="App">

        <div className="Header"> <Header/></div>
    <br/>

        <div className="List"><List/></div>


    </div>

  );

}

export default App;
