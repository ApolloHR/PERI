export default function reducer(state={
  allTrips: [],
  loggedIn: false,
}, action) {
  switch (action.type) {
    case "FETCH_TRIPS_FINISHED": {
      return {...state, allTrips: action.payload}
    }
    case "LOG_IN": {
      return {...state, loggedIn: true}
    }
  }

  return state
}