import React from 'react';
import { Link } from 'react-router-dom';
import SkyLight from 'react-skylight';
import { connect } from 'react-redux';

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

@connect((store) => {
  return {
    auth: store.login
  }
})

class Nav extends React.Component {

  render() {
console.log('BENJIIIIIIII', this.props.auth)
    if (!this.props.auth.loggedIn) {
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
                <Link to="/postTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Post Trip </Link>
              </p>
              <p className="level-item has-text-centered">
                <Link to="/planTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Plan Trip </Link>
              </p>
              <p className="level-item has-text-centered invite-pop-up" onClick={() => this.simpleDialog.show()}> Invite
              </p>
              <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
                <Invite />
              </SkyLight>
              <p className="level-item has-text-centered">
                <a class="has-text-grey-dark" activeClassName="active" href="/auth/google" style={style.routes}> Login </a>
              </p>
            </div>
          </nav>
        </div>
      );
    } else {
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
                <Link to="/postTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Post Trip </Link>
              </p>
              <p className="level-item has-text-centered">
                <Link to="/planTrip" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Plan Trip </Link>
              </p>
              <p className="level-item has-text-centered invite-pop-up" onClick={() => this.simpleDialog.show()}> Invite
              </p>
              <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
                <Invite />
              </SkyLight>
              <p className="level-item has-text-centered">
                <Link to="/profile" class="has-text-grey-dark" activeClassName="active" style={style.routes}> Profile </Link>
              </p>
            </div>
          </nav>
        </div>
      );
    }
  }
}


export default Nav;