import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import OneTripSpotsIntercept from './oneTripSpotsIntercept.jsx';
import OneTripSpots from './oneTripSpots.jsx';



class Infinite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null,
      counter: 0
    };
  }


  loadItems(page) {
    var trips = this.props.trips;

    if (this.state.hasMoreItems) {
      var endOfData = this.props.trips.length;
      trips.reverse();
      var toLoad = trips.slice(this.state.counter, this.state.counter + 4);
      if ((this.state.counter + 4) >= endOfData) {
        this.setState({
          tracks: this.state.tracks.concat([toLoad]),
          counter: this.state.counter + 4,
          hasMoreItems: false
        });
      } else {
        this.setState({
          tracks: this.state.tracks.concat([toLoad]),
          counter: this.state.counter + 4
        });
      }
    }
  }


  render() {
    const loader = <div className="loader">Loading ...</div>;

    console.log('state ===', this.state);
    var context = this;

    if (this.props.trips[0]) {
      return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
        >
          <div className="container">
            <div class="level">
              <h3 class="level-left title has-text-grey-dark">Experiences
              </h3>
            </div>

            <div>{
              context.props.trips.map((tripObj) => (
                <div>
                  <OneTripSpots trip={tripObj} />
                </div>))}
            </div>
          </div>
        </InfiniteScroll>
      );
    } else {
      return (
          <div className="container">
            <div class="level">
              <h3 class="level-left title has-text-grey-dark">Experiences</h3>
            </div>
            <div>
              Loading:
            </div>

          </div>
      );
    }
  }
}

export default Infinite;
