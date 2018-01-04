import React from 'react';
import MarkerItem from './markerItem.jsx';

const MarkerList = (props) => {
  const spotsArray = props.spots.slice();
  return spotsArray.reverse().map( (spot, index) => (
    <MarkerItem spot={spot}/>
  ));
};

export default MarkerList;