import React from 'react';
import Axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToSearch: ''
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

  }


  render() {
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
              placeholder="Enter Place Description"
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
  }
}

export default Profile;