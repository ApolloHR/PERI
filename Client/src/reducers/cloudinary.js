export default function reducer(state={
  gallery: [],
}, action) {
  switch (action.type) {
    case "FETCH_GALLERY": {
      return {...state, gallery: action.payload.data.resources}
    }
  }
  return state
}