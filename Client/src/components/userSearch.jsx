import React from 'react';
import algoliasearch from 'algoliasearch';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox, SortBy, Stats, Pagination } from 'react-instantsearch/dom';
import CustomHits from './customHits.jsx';

@connect((store) => {
  return {
    search: store.search
  }
})

class UserSearch extends React.Component {
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
          indexName='users'
        >
          <div className="column main-search">
            <h3 className="subtitle is-3">Search for a User</h3>
            <form>
              <div className="field is-grouped">
                <div className="control is-expanded">
                <SearchBox
                  translation={{ placeholder: 'Find your next adventure...'}} defaultRefinement='thep'
                />
                </div>
              </div>
            </form>
          </div>
          <h1 className="title has-text-grey-dark" id="experience">User's Trips</h1>
          <div className="container">

            <CustomHits/>
            <Pagination/>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default UserSearch;