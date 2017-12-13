import React from 'react';
import {CardTitle, Card} from 'react-materialize';
import axios from 'axios';

class OneSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    var thisContext = this;
    axios.post('/spots', {
      tripId: this.props.trip.location.query._id
    })
      .then(function (response) {
        console.log(response);
        thisContext.setState({spots: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render () {
    return (
      <div>
        {this.state.spots.map((spot) => {
          return (
            <div>
              <Card header={<CardTitle reveal image={spot.photo} waves='light'/>}
                title={spot.spotName}reveal={<p>{spot.description}</p>}>
                <p><a href="#">see map</a></p>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}


export default OneSpot;
