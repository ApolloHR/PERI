import React from 'react';

const HitComponent = (props) => {
  console.log('INSIDE HIT COMPONENT====> ', props);
  return (
    <div className="col-sm-3">
      <p>{props.hit.description}</p>
      <img src={props.hit.thumbnail} />
    </div>
  );
}

export default HitComponent;