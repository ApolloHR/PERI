import React from 'react';
import { Highlight, InstantSearch } from 'react-instantsearch/dom';
import { connectHits } from 'react-instantsearch/connectors';

import HitComponent from './hitComponent.jsx';

const CustomHits = connectHits(({ hits }) =>
  <div className='row'>
    {hits.map(hit =>
      <HitComponent hit={hit} key={hit.ObjectID}/>
    )}
  </div>
);

export default CustomHits;