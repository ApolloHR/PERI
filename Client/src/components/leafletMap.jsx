import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

let LeafletMap = (props) => (

  <div>
    <Map id="mapid" center={[spot.lat, spot.long]} zoom={13}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[this.props.spot.lat, this.props.spot.long]}>
        <Popup>
          <span>
            {this.props.spot.spotName} <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </Map>
  </div>

);

export default LeafletMap;

