import React from "react"
import { NavLink } from "react-router-dom"

let Nav = () => (

<div>
  <ul className="nav">
    <li>
      <NavLink to="/landing" activeClassName="active">Home</NavLink>
    </li>
    <li>
      <NavLink to="/buildTrip" activeClassName="active">Build Trip</NavLink>
    </li>
    <li>
      <NavLink to="/cart" activeClassName="active">Cart</NavLink>
    </li>
  </ul>
</div>

  )

export default Nav;