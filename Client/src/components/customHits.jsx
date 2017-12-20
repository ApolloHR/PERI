import React from 'react';
import { Highlight, InstantSearch } from 'react-instantsearch/dom';
import { connectHits, connectInfiniteHits } from 'react-instantsearch/connectors';

import HitComponent from './hitComponent.jsx';
import OneTripSpots from './oneTripSpots.jsx';

const CustomHits = connectInfiniteHits(({ hits }) =>
  <div className='row'>
    {hits.map(hit => {

      return (<OneTripSpots trip={hit} key={hit.ObjectID}/>);

    })}
  </div>
);

export default CustomHits;