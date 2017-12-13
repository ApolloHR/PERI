import React from "react";
import {CardTitle, Card} from 'react-materialize';
import axios from "axios";

class OneSpot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getSpot() {
    axios.post('/spots', function)
  }

  render () {
    return (
      <div>
      {console.log(spot)}
        HELLOOOOO :D
      </div>
    )
  }
}


export default OneSpot;
