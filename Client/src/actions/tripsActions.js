import axios from 'axios';

export function fetchTrips() {
  return function(dispatch) {
    dispatch({type: 'FETCH_TRIPS'});
    axios.get('/trips')
      .then(function (response) {
        console.log('trips response', response);
        dispatch({type: 'FETCH_TRIPS_SUCCESS', payload: response.data});
      })
      .catch(function (error) {
        console.log(error);
        dispatch({type: 'FETCH_FAILURE'});
      });
  };
}

export function postTrip(data) {
  return function(dispatch) {
    dispatch({type: 'SAVE_TRIP'});
    axios.post('/api/saveTrip', data)
      .then(function (response) {
        console.log('Successfully saved to db', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function login(value) {
  return { type: 'LOG_IN', payload: value };
}