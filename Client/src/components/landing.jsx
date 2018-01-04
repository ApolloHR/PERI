import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import Login from './login.jsx';
import OneTrip from './oneTrip.jsx';
import { fetchTrips } from '../actions/tripsActions';
import { login } from '../actions/login';
import Infinite from './infinite.jsx';
import Search from './search.jsx';


@connect((store) => {
  return {
    trips: store.trips,
    search: store.search,
    auth: store.login
  }
})

class Landing extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTrips());
    console.log('isLoggedIn componentwillmount =');
    this.isLoggedIn();
  }

  isLoggedIn() {
    let _this = this;
    axios.post('/isLoggedIn', {}).then(response => {
      console.log('response.data success =', response.data);
      console.log('response.data.sessionID in landing.jsx =', response.data.sessionID);
      console.log('this.props in landing =', _this.props);
      console.log('login in landing =', login);

      if(response.data.sessionID) {
        let creds = response.data;
        _this.props.dispatch(login(creds));
      }
    })
    .catch(error => {
      console.log('response failure =');
      console.log(error);
    });
  }

  render () {
    return (
      <div>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns is-vcentered'>
                <Search/>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Landing;