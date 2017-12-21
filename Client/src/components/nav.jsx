import React from 'react';
import { Link } from 'react-router-dom';
import SkyLight from 'react-skylight';
import Login from './login.jsx';
import Invite from './invite.jsx';


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

class Nav extends React.Component {

  render() {
    return (
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <Link to="/" className="has-text-grey-dark"activeClassName="active" style={style.routes}>
              <i className="fa fa-ravelry fa-2x has-text-primary" style={style.nav}></i>
            </Link>
          </div>
          <div className="level-right">

            <p className="level-item has-text-centered">
              <Link to="/uploadTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Upload Trip </Link>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/cart" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Cart </Link>
            </p>
            <p className="level-item has-text-centered invite-pop-up" onClick={() => this.simpleDialog.show()}> Invite
              <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
                <Invite />
              </SkyLight>
            </p>
            <p className="level-item has-text-centered">
              <a class="has-text-grey-dark" activeClassName="active" href="/auth/google" style={style.routes}> Login </a>
            </p>
          </div>
        </nav>
      </div>
    );
  }
}


export default Nav;