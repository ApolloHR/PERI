export default function reducer(
  state={
    loggedIn: false,
    test: 'hello world',
    creds: {},
}, action) {
  switch (action.type) {
    case "FETCH_TRIPS_SUCCESS": {
      return {...state, allTrips: action.payload}
    }
    case "USER_LOGIN": {
      return {...state, loggedIn: true}
    }
  }
  return state
}