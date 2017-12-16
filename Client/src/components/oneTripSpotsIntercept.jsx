import React from 'react';
import OneTripSpots from './oneTripSpots.jsx';


let OneTripSpotsIntercept = ({trip}) => (
  <div  className="columns">
    {trip.map((tripObj) => {
      return (
        <div className="column">
          <OneTripSpots trip={tripObj} key={tripObj._id} />
        </div>
      );
    })}
  </div>
);

export default OneTripSpotsIntercept;
