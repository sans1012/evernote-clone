import React from 'react'
import {Link, NavLink} from "react-router-dom";
const NavBar = () => {
      return (
          
            <nav className="green">
                  <Link to="/" className="brand-logo">Notebook</Link>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                        <NavLink to="/favorites">Favorite</NavLink>
                  </li>
                  
                  </ul>
            </nav>
      )
}

export default NavBar
