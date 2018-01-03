import React from 'react';
import algoliasearch from 'algoliasearch';
import { connect } from 'react-redux';
import { InstantSearch, SearchBox, SortBy, Stats, Pagination } from 'react-instantsearch/dom';
import axios from 'axios';
import CustomHits from './customHits.jsx';

@connect((store) => {
  return {
    search: store.search,
    auth: store.login
  }
})

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClicked: false,
      userProfile: {},

    }
    this.hasBeenClicked = this.hasBeenClicked.bind(this);
  }

  componentWillMount() {
    var context = this;
    var data = this.props.auth.creds.username;

    axios.post('/getProfile', {data})
      .then((res) => {
        console.log('WHATtt it actually worked??!! res ==', res);
        context.setState({
          userProfile: res.data.userProfile
        });
      })
      .catch((err) => {
        console.log('error GETting profile line 37 profile.jsx');
      });
  }

  hasBeenClicked() {
    this.setState({searchClicked: true})
  }

  render() {
    const { search } = this.props;
    console.log(search.search);
    const style = {
      searchBar: {
        maxWidth: '100%'
      }
    }
    // console.log('this.props.store', this.props.auth)
    if (!this.state.searchClicked) {
      return (
        <div>
          <InstantSearch
            appId='NH6N5P5OH8'
            apiKey='f0e90c174d07dbbcec7820fc3e8d04fb'
            indexName='users'
          >
            <button onClick={this.hasBeenClicked} >Search For Friends</button>
            <h1 className="title has-text-grey-dark" id="experience">{this.props.auth.creds.username} Trips</h1>
            <div className="container">
              <CustomHits/>
              <Pagination/>
            </div>
          </InstantSearch>
        </div>
      );
    } else {
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
                    translation={{ placeholder: 'Find your next adventure...'}}
                    defaultRefinement={this.props.auth.creds.username}
                  />
                  </div>
                </div>
              </form>
            </div>
            <h1 className="title has-text-grey-dark" id="experience">{this.props.auth.creds.username} Trips</h1>
            <div className="container">
              <CustomHits/>
              <Pagination/>
            </div>
          </InstantSearch>
        </div>
      );
    }
  }
}

export default UserSearch;