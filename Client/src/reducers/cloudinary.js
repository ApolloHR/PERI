export default function reducer(state={
  gallery: [],
  thumbnail: '',
  tempSpot: {
    spotName: '',
    description: '',
    long: 1,
    lat: 1,
    elevation: 1,
    photo: ''
  },
  tripInfo: {
    username: '',
    tripName: '',
    destination: '',
    description: '',
    thumbnail: '',
    spots: []
  },
}, action) {
  switch (action.type) {
    case "FETCH_GALLERY": {
      return {
        ...state, 
        gallery: [...state.gallery, action.payload]
      }
    }
    case "FETCH_THUMBNAIL": {
      return {...state, thumbnail: action.payload}
    }
    case "FETCH_TRIPINFO": {
      return {...state, tripInfo: action.payload}
    }
    case "FETCH_SPOTINFO": {
      return {...state, tempSpot: action.payload}
    }
    case "ADD_SPOTINFO": {
      // let copy = state.tripInfo.spots.concat(action.payload);
      // let copy2 = [...state.tripInfo.spots, action.payload];
      return {
        ...state, 
        tripInfo: {
          ...state.tripInfo,
          spots: [...state.tripInfo.spots, action.payload]
        }
      }
    }
  }
  return state
}