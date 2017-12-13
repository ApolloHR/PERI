import React from "react";
import {CardTitle, Card} from 'react-materialize';
import axios from "axios";

class OneSpot extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.post('/spots', {
      tripId: this.props.trip.location.query._id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <div>
      {console.log('HIIIIII', this.props.trip.location.query._id)}
        HELLOOOOO :D
      </div>
    )
  }
}


export default OneSpot;
