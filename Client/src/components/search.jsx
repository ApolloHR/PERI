import React from 'react';
import { connect } from 'react-redux';
import searchInput from '../actions/searchActions.js';

@connect((store) => {
  return {
    search: store.search
  }
})

class Search extends React.Component {

  handleSearch(e) {
    this.props.dispatch(searchInput(e.target.value));
  }

  render() {
    const { search } = this.props;
    console.log(search.search);
    return (
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
    );
  }
}

export default Search;