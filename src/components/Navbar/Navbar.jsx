import React from 'react'
import Logo from "../../images/Logo.png"
import "./Navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
      <>
        <nav className = "navbar">
            <Link to = "/"><img src={Logo} alt="" className = "web-logo"/></Link>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/schedule">Schedule</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todo">ToDo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user">User</Link>
                </li>
            </ul>
        </nav>
      </>
    )
}

export default Navbar
