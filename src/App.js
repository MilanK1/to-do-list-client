import './App.css';
import React from 'react';
import List from './Components/list/List';
import Header from "./Components/header/Header"
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
<BrowserRouter>
    <div className="App">

        <div className="Header">
            <Header/>
        </div>
    <br/>
        <Switch>
        <div className="List">
            <Route path="/" exact component={List}/>
        </div>
        </Switch>
        <Switch>
            <div className="Login-form">
                <Route path="/login" component={Login}/>
            </div>
        </Switch>

        <Switch>
            <div className="register-form">
                <Route path="/register" component={Register}/>
            </div>
        </Switch>

    </div>
</BrowserRouter>
  );

}

export default App;
