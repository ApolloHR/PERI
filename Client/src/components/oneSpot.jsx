import React from 'react';
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
            <div class="box">
              <div class="card-image">
                <figure class="image is-4by5">
                  <img src={spot.photo} alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={spot.photo} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{spot.spotName}</p>
                  </div>
                </div>

                <div class="has-text-centered">
                  {spot.description}
                  <br/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


export default OneSpot;
