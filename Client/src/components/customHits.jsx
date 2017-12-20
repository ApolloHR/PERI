import React from 'react';
import { Highlight, InstantSearch } from 'react-instantsearch/dom';
import { connectHits } from 'react-instantsearch/connectors';

import HitComponent from './hitComponent.jsx';
import OneTripSpots from './oneTripSpots.jsx';

const CustomHits = connectHits(({ hits }) =>
  <div className='row'>
    {hits.map(hit => {

      // console.log('IM IN THE HIT===>  ', hit);
      return (<OneTripSpots trip={hit} key={hit.ObjectID}/>);

    }

    )}
  </div>
);

export default CustomHits;