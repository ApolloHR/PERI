import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// @connect((store) => {
//   return {
//     login: store.login
//   }
// }, )

class Login extends React.Component {


  render () {
    return (
      <div>
        <div>Build Your Own Adventure:</div>
        <div>Login</div>
        <form>
          <a type="submit" href="/auth/google">Google Login</a>
        </form>
      </div>
    );
  }
  // <div>{this.props.login.google}</div>
}

export default Login;