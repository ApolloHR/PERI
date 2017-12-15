import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './login.jsx';

const style = {
  nav: {
    marginTop: 20,
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
        <i class="fa fa-paw fa-inverse fa-2x has-text-primary" style={style.nav}></i>
      </div>
      <div className="level-right">
        <p className="level-item has-text-centered">
          <NavLink to="/" class="has-text-grey-dark"activeClassName="active" style={style.routes}> Home </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink to="/buildTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Build Trip </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <NavLink to="/cart" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Cart </NavLink>
        </p>
        <p className="level-item has-text-centered">
          <a class="has-text-grey-dark" activeClassName="active" href="/auth/google" style={style.routes}>Login </a>
        </p>
      </div>
    </nav>
  </div>

);

export default Nav;