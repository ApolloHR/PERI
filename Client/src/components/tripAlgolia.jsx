import React from 'react';

const TripAlgolia = ({ hit }) => {
  return (
    <div className='column has-text-centered'>
      {hit.tripName}
      <img src={hit.thumbnail}/>
    </div>
  );
};

export default TripAlgolia;