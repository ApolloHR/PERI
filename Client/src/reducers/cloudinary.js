export default function reducer(state={
  gallery: [],
  uploadTrip: '',
}, action) {
  switch (action.type) {
    case "UPLOAD_TRIP": {
      return {...state, uploadTrip: action.payload}
    }
    case "FETCH_GALLERY": {
      return {...state, gallery: action.payload}
    }
  }
  return state
}