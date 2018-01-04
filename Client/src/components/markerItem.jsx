import React from 'react';
import { Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

class MarkerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  toggleInfoBox() {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    const { spot } = this.props;
    return (
      <Marker
        position={{ lat: spot.lat, lng: spot.long }}
        onClick={this.toggleInfoBox.bind(this)}
      >
        {<InfoBox options={
          {
            pixelOffset: new google.maps.Size(-125, -130),
            disableAutoPan: false,
            visible: this.state.isVisible,
            maxWidth: 0,
            closeBoxURL: '',
            boxStyle: {
              padding: '0px 0px 0px 0px',
              width: '250px',
              height: '64px'
            },
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: 'floatPane',
            enableEventPropagation: false
          }
        }
        >
          <div className="info-box-wrap">
            <img className="image is-64x64" src={spot.photo}/>
            <div className="info-box-text-wrap">
              <h6 className="spotname">{spot.spotName}</h6>
              <p className="description">{spot.description}</p>
            </div>
            <div class="action-btns"></div>
          </div>
        </InfoBox>}
      </Marker>
    );
  }
}

export default MarkerItem;