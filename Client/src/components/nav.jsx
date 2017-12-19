import React from 'react';
import { Link } from 'react-router-dom';
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
        <i className="fa fa-ravelry fa-2x has-text-primary" style={style.nav}></i>
      </div>
      <div className="level-right">
        <p className="level-item has-text-centered">
          <Link to="/" className="has-text-grey-dark"activeClassName="active" style={style.routes}> Home </Link>
        </p>
        <p className="level-item has-text-centered">
          <Link to="/buildTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Build Trip </Link>
        </p>
        <p className="level-item has-text-centered">
          <Link to="/cart" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Cart </Link>
        </p>
        <p className="level-item has-text-centered">
          <a class="has-text-grey-dark" activeClassName="active" href="/auth/google" style={style.routes}> G-Login </a>
        </p>
        <p className="level-item has-text-centered">
          <a class="has-text-grey-dark" activeClassName="active" href="/auth/facebook" style={style.routes}> FB-Login </a>
        </p>
      </div>
    </nav>
  </div>

);

export default Nav;