import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './login.jsx';

let Nav = (props) => (

  <div>
    <nav className="nav">
      <span>PERI LOGO HERE</span>
      <NavLink to="/" activeClassName="active"> Home </NavLink>
      <NavLink to="/buildTrip" activeClassName="active"> Build Trip </NavLink>
      <NavLink to="/cart" activeClassName="active"> Cart </NavLink>
      <a activeClassName="active" href="/auth/google">Login </a>
    </nav>
  </div>

);

export default Nav;