import React from "react"
import { NavLink } from "react-router-dom"

let Nav = (props) => (

<div>
  <nav className="nav">
    <NavLink to="/" activeClassName="active"> Home </NavLink>
    <NavLink to="/buildTrip" activeClassName="active"> Build Trip </NavLink>
    <NavLink to="/cart" activeClassName="active"> Cart </NavLink>
  </nav>
</div>

  )

export default Nav;