import "./header.css"
const Header = ()=>{

return(
    <header className="header">
        <a href="" className="logo">ToDo List</a>
        <input className="menu-btn" type="checkbox" id="menu-btn"/>
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#login">Reg/Log in</a></li>
        </ul>
    </header>

)

}

export default Header