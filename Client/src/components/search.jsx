import React from 'react';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox, SortBy, Stats } from 'react-instantsearch/dom';
import { Link } from 'react-router-dom';

import searchInput from '../actions/searchActions.js';
import CustomHits from './customHits.jsx';

@connect((store) => {
  return {
    search: store.search
  }
})

class Search extends React.Component {

  handleSearch(e) {
    this.props.dispatch(searchInput(e.target.value));
  }

  handleAlgoliaSearch() {
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
          appId='GQA3LGUNKB'
          apiKey='86aba503ec3ea5f52735f79f8641d853'
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
                    {value: 'periTrips2_upvotes_desc', label: 'Most Upvoted'},
                  ]}
                />
              </div>
            </div>
            <CustomHits/>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;