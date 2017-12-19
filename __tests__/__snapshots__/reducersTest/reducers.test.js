import tripReducer from '../../../Client/src/reducers/trips.js';

describe('>>>R E D U C E R --- Test trips reducers', () => {
  it('+++ reducer for trips', () => {
    let state = { allTrips: [], loggedIn: false };
    state = tripReducer(state, {
      type: 'FETCH_TRIPS_SUCCESS',
      payload: ['New Zealand', 'Australia', 'South Korea', 'Bali']
    });
    expect(state).toEqual({
      allTrips: ['New Zealand', 'Australia', 'South Korea', 'Bali'],
      loggedIn: false
    });
  });
});