import "./header.css"
import {
    BrowserRouter,
    Route,
} from "react-router-dom";
import { NavLink } from "react-router-dom";



const Header = ()=>{

return(

    <header className="header">
        <a href="" className="logo">ToDo List</a>
        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">

          <li><a>Home</a></li>
           <li><a>Register/Log in</a></li >


        </ul>
        {/*The Switch that renders the login/register pages.*/}

    </header>

)

}

export default Header