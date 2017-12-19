import React from 'react';

import { Highlight, InstantSearch } from 'react-instantsearch/dom';
import { connectHits } from 'react-instantsearch/connectors';

const CustomHits = connectHits(({ hits }) =>
  <div>
    {hits.map(hit =>
      <p key={hit.objectID}>
        <Highlight attributeName="description" hit={hit} />
        <img src={hit.thumbnail}/>
      </p>
    )}
  </div>
);

export default CustomHits;