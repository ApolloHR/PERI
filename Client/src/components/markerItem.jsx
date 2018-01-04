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
            pixelOffset: new google.maps.Size(-40, -150),
            disableAutoPan: false,
            visible: this.state.isVisible,
            maxWidth: 0,
            closeBoxURL: '',
            boxStyle: {
              padding: '0px 0px 0px 0px',
              width: '280px',
              height: '64px'
            },
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: 'floatPane',
            enableEventPropagation: false
          }
        }
        >
          <div className="infoBox-popup-box">
              <img className="image is-64x64 marker-image" src={spot.photo}/>
            <div className="infoBox-popup-content">{spot.spotName}
            </div>
          </div>
        </InfoBox>}
      </Marker>
    );
  }
}

export default MarkerItem;