import React from 'react';

const TripAlgolia = ({ hit }) => {
  return (
    <div>
      {hit.tripName}
      <img src={hit.thumbnail}/>
    </div>
  );
};

export default TripAlgolia;