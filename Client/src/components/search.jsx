import React from 'react';
import algoliasearch from 'algoliasearch';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox, SortBy, Stats, Pagination } from 'react-instantsearch/dom';
import { Link } from 'react-router-dom';
import searchInput from '../actions/searchActions.js';
import CustomHits from './customHits.jsx';

@connect((store) => {
  return {
    search: store.search
  }
})

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { search } = this.props;
    console.log(search.search);
    const style = {
      searchBar: {
        maxWidth: '100%'
      }
    }

    return (
      <div>
        <InstantSearch
          appId='NH6N5P5OH8'
          apiKey='f0e90c174d07dbbcec7820fc3e8d04fb'
          indexName='periTrips2'
        >
          <div className="column main-search">
            <h1 className="title is-1 has-text-primary">PERI</h1>
            <h3 className="subtitle is-3">Travel that inspires</h3>
            <form>
              <div className="field is-grouped">
                <div className="control is-expanded">
                <SearchBox translation={{ placeholder: 'Find your next adventure...'}}/>
                </div>
              </div>
            </form>
          </div>
          <h1 className="title has-text-grey-dark" id="experience">Experience</h1>
          <div className="container">
            <div className="level">
              <div className="level-left">
                <Stats/>
              </div>
              <div className="level-left">
                <SortBy
                  defaultRefinement="periTrips2"
                  items={[
                    {value: 'periTrips2', label: 'Most Recent'},
                    {value: 'upvotes_asc', label: 'Most Upvoted'},
                  ]}
                />
              </div>
            </div>
            <CustomHits/>
            <Pagination/>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;