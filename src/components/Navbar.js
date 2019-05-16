// components/Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul >
        <li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
        <li><NavLink  to='/about' activeClassName="selected">About</NavLink></li>
        <li><NavLink  to='/contact' activeClassName="selected" >Contact</NavLink></li>
        <li><NavLink to='/projects' activeClassName="selected">Projects</NavLink></li>


      </ul>
    </nav>
  )
}

export default navbar;