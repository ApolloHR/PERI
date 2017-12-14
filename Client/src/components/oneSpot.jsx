import React from 'react';
import axios from 'axios';
import MapContainer from './map.jsx';
import SpotMap from './spotMap.jsx';


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
    const style = {
      spot: {
        margin: 0,
      }
    };
    return (
      <div>
        {this.state.spots.map((spot) => {
          return (
            <div className="container">
              <div className="card">
                <div className="">
                  <figure className="image" style={style.spot}>
                    <img src={spot.photo} alt="Placeholder image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{spot.spotName}</p>
                      <br></br>
                      <p className="subtitle is-6">{spot.description}</p>
                      <div class="modal">
                        <div class="modal-background"></div>
                        <div class="modal-content">
                          <SpotMap spots={spot}/>
                        </div>
                        <button class="modal-close is-large" aria-label="close">Map me</button>
                      </div>
                    </div>
                  </div>
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
