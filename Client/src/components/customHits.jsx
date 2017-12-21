import React from 'react';
import { InstantSearch, Stats, SortBy } from 'react-instantsearch/dom';
import { connectHits, connectInfiniteHits } from 'react-instantsearch/connectors';

import HitComponent from './hitComponent.jsx';
import OneTripSpots from './oneTripSpots.jsx';

const CustomHits = connectInfiniteHits(({ hits }) => {
  return (
    <div>
      <div className="level">
        <div className="level-left">
          <Stats/>
        </div>
        <div className="level-left">
          <SortBy
            defaultRefinement="periTrips2"
            items={[
              {value: 'periTrips2', label: 'Most Recent'},
              {value: 'upvotes_desc', label: 'Most Upvoted'},
              {value: 'upvotes_asc', label: 'Least Liked'},
            ]}
          />
        </div>
      </div>
      <div className='row'>
        {hits.map(hit => {
          return (<OneTripSpots trip={hit} key={hit.ObjectID}/>);
        }
        )}
      </div>
    </div>
  );
});

export default CustomHits;