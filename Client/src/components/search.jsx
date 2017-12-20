import React from 'react';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox } from 'react-instantsearch/dom';
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
    return (
      <div>
        <div className="column main-search">
          <h1 className="title is-1 has-text-primary">PERI</h1>
          <h3 className="subtitle is-3">Travel that inspires</h3>
          <form>
            <div className="field is-grouped">
              <div className="control is-expanded">
                <input className="input is-large" type="text" placeholder="Find your next adventure..." value={search.search}
                  onChange={this.handleSearch.bind(this)}/>
              </div>
            <div className="control">
              <button className="button is-primary is-large">Search</button>
            </div>
            </div>
          </form>
        </div>
        <InstantSearch
          appId='GQA3LGUNKB'
          apiKey='86aba503ec3ea5f52735f79f8641d853'
          indexName='periTrips2'
        >
          <SearchBox/>
          <h1 className="title has-text-grey-dark" id="experience">Experience</h1>
          <div className="container">
            <CustomHits/>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;