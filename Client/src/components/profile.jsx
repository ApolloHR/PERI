import React from 'react';
import axios from 'axios';
import HitComponent from './hitComponent.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToSearch: '',
      profileFound: false,
      userProfile: {}
    };

    this.submitUserSearch = this.submitUserSearch.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(event) {
    this.setState({
      userToSearch: event.target.value
    });
  }

  submitUserSearch() {
    var context = this;
    var data = this.state.userToSearch;

    axios.post('/getProfile', {data})
      .then((res) => {
        console.log('WHATtt it actually worked??!! res ==', res);
        context.setState({
          userProfile: res,
          profileFound: true
        });
      })
      .catch((err) => {
        console.log('error GETting profile line 37 profile.jsx');
      });
  }


  render() {
    var context = this;
    if (!context.state.profileFound) {
      return (
        <div>
          Profile
          <div class="field">
            <div className="control is-expanded">
              <label class="label">Search User:</label>
              <input
                className="input"
                type="text"
                name="description"
                placeholder="Username"
                onChange={this.getUserData}
                required
              />
            </div>
          </div>
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              value="submit"
              onClick={this.submitUserSearch} >
              Find!
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Profile
          <div class="field">
            <div className="control is-expanded">
              <label class="label">Search User:</label>
              <input
                className="input"
                type="text"
                name="description"
                placeholder="Username"
                onChange={this.getUserData}
                required
              />
            </div>
          </div>
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              value="submit"
              onClick={this.submitUserSearch} >
              Find!
            </button>
          </div>

          {context.state.userProfile.map((trip, i) => {
            return (
              <HitComponent trip={trip} key={i} />
            );
          })}
        </div>
      );
    }

  }
}

export default Profile;