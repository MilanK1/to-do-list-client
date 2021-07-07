import "./header.css"
import {Link} from "react-router-dom";

const Header = ()=>{

return(
    <header className="header">
       <Link to={'/'}><a className="logo">ToDo List</a></Link>
        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <Link to={"/"}>  <li><a>Home</a></li> </Link>
           <Link to={'login'}> <li><a >Reg/Log in</a></li> </Link>
        </ul>
    </header>

)

}

export default Header