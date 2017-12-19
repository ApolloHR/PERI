import React from 'react';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';
import TripAlgolia from './tripAlgolia.jsx';

const SearchAlgolia = () => {
  return (
    <div>
      <SearchBox className='ais-SearchBox__reset ais-SearchBox__button'/>
      <Hits hitComponent={ TripAlgolia }/>
    </div>
  );
};

export default SearchAlgolia;