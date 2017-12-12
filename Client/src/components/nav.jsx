import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./login.jsx";

let Nav = (props) => (

<div>
  <nav className="nav">
  <span>PERI LOGO HERE</span>
    <NavLink to="/" activeClassName="active"> Home </NavLink>
    <NavLink to="/buildTrip" activeClassName="active"> Build Trip </NavLink>
    <NavLink to="/cart" activeClassName="active"> Cart </NavLink>
    <NavLink to="/auth/google" activeClassName="active">Login </NavLink>
  </nav>
</div>

  )

export default Nav;