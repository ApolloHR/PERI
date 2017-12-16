import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import OneTripSpotsIntercept from './oneTripSpotsIntercept.jsx';


class Infinite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null,
      counter: 0,
      bottomReached: false
    };
  }

  loadItems(page) {
    var self = this;

    // var url = api.baseUrl + '/users/8665091/favorites';
    // if (this.state.nextHref) {
    //   url = this.state.nextHref;
    // }
    if (!self.state.bottomReached) {
      axios.get('/getAllSpots', 'kitten')
        .then(function(resp) {
          if (resp) {
            console.log('RESPPPONSE L28 infinite.jsx =', resp);
            // var tracks = self.state.tracks;
            // resp.data.map(trip => {
            //   tracks.push(trip);
            // });

            if (resp.data) {
              var endOfData = resp.data.length;
              var toLoad = resp.data.slice(self.state.counter, self.state.counter + 4);
              if ((self.state.counter + 4) >= endOfData) {
                self.setState({
                  tracks: self.state.tracks.concat([toLoad]),
                  counter: self.state.counter + 4,
                  bottomReached: true
                });
              } else {
                self.setState({
                  tracks: self.state.tracks.concat([toLoad]),
                  counter: self.state.counter + 4
                });
              }
            }
          }
        });
    }
    // .cath((error) => {
    //   console.log('ERROR', error);
    // });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;

    // var items = [];
    // this.state.tracks.map((track, i) => {
    //   items.push(
    //     <div className="track" key={i}>
    //       <a href={track.photo} target="_blank">
    //         <img src={track.photo} width="150" height="150" />
    //         <p className="title">{track.spotName}</p>
    //       </a>
    //     </div>
    //   );
    // });
console.log('TRACKS ===', this.state.tracks)
    var context = this;

    if (this.state.tracks[0]) {
      return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >

          <div className="container">
            <div class="level">
              <h3 class="level-left title has-text-grey-dark">Experiences
              </h3>
            </div>

            <div className="columns">{
              context.state.tracks.map((tripObj) => (
                <div>
                  <OneTripSpotsIntercept trip={tripObj} />
                </div>))}

            </div>
          </div>
        </InfiniteScroll>
      );
    } else {
      return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >

          <div className="container">
            <div class="level">
              <h3 class="level-left title has-text-grey-dark">Experiences</h3>
            </div>
            <div>
              Loading:
            </div>

          </div>
        </InfiniteScroll>
      );
    }
  }
}

export default Infinite;
