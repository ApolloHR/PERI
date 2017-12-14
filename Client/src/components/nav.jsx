import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './login.jsx';

const style = {
  nav: {
    marginTop: 10,
    marginBottom: 10,
  },
  routes: {
    marginRight: 10,
    marginLeft: 10,
  }
};

let Nav = (props) => (

  <div className="container">
    <nav className="level">
      <div className="level-left">
        <p className="title is-1 level-item has-text-centered" style={style.nav}>PERI</p>
      </div>
      <div className="level-right">
        <p className="level-item has-text-centered">
          <NavLink to="/" activeClassName="active" style={style.routes}> Home </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink to="/buildTrip" activeClassName="active" style={style.routes}> Build Trip </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink to="/cart" activeClassName="active" style={style.routes}> Cart </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <a activeClassName="active" href="/auth/google" style={style.routes}>Login </a>
        </p>
      </div>
    </nav>
  </div>

);

export default Nav;