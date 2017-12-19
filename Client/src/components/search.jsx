import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="column main-search">
        <h1 className="title is-1 has-text-primary">PERI</h1>
        <h3 className="subtitle is-3">Travel that inspires</h3>
        <form>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input className="input is-large" type="text" placeholder="Find your next adventure..."/>
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