import React from 'react';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';
import TripAlgolia from './tripAlgolia.jsx';


const style = {
  input: {
    width: '100%'
  }
};

const SearchAlgolia = () => {
  return (
    <div>
      <SearchBox className="ais-SearchBox__reset ais-SearchBox__button"/>
      <div className="columns">
        <Hits hitComponent={ TripAlgolia }/>
      </div>
    </div>
  );
};

export default SearchAlgolia;