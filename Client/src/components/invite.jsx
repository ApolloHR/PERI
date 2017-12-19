import React from 'react';
import axios from 'axios';

class Invite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: ''
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input) {
    // console.log('should be guests email =', input.target.value)
    this.setState({guest: input.target.value});
  }

  sendEmail() {
    //SEND EMAIl
    var input = {
      guest: this.state.guest,
      currentUser: ''
    };
    axios.post('/invite', input).then(function(success) {
      console.log('sent email: ', success);
    }).catch(function(error) {
      console.log('error email not sent, line 49 invite.jsx: ', error);
    });
  }


  render() {
    return (
      <div className="column main-search">
        <h1 className="title is-1 has-text-primary">PERI</h1>
        <h3 className="subtitle is-3">Inspire Friends</h3>
        <form>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input className="input is-large" type="text" placeholder="Friends Email" value={this.state.guest}
                onChange={this.handleChange}/>
            </div>
            <div className="control">
              <button className="button is-primary is-large" onClick={this.sendEmail}>Invite</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Invite;