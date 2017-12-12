export default function reducer(state={
  allTrips: [],
  loggedIn: false,
  uploadTrip: '',
}, action) {
  switch (action.type) {
    case "FETCH_TRIPS_SUCCESS": {
      return {...state, allTrips: action.payload}
    }
    case "LOG_IN": {
      return {...state, loggedIn: true}
    }
    case "UPLOAD_TRIP": {
      return {...state, uploadTrip: action.payload}
    }
  }

  return state
}