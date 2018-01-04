import React from 'react';
import axios from 'axios';
import UserSearch from './userSearch.jsx';

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
        context.setState({
          userProfile: res.data,
          profileFound: true
        });
      })
      .catch((err) => {
        console.log('error GETting profile line 37 profile.jsx');
      });
  }

  render() {
    return (
      <div>
        <UserSearch />
      </div>
    );
  }
}

export default Profile;