export default function reducer(state={
  gallery: [],
  thumbnail: '',
  tripInfo: {
    username: '',
    tripName: '',
    destination: '',
    description: '',
    hashtag: '',
    thumbnail: '',
    spots: []
  },
}, action) {
  switch (action.type) {
    case "CART_THUMBNAIL": {
      return {...state, thumbnail: action.payload}
    }
    case "CART_TRIPINFO": {
      return {...state, tripInfo: action.payload}
    }
    case "ADD_SPOTTOCART": {
      return {...state,
        tripInfo: {
          ...state.tripInfo,
          spots: [...state.tripInfo.spots, action.payload]
        }
      }
    }
    case "ADD_TRIPTOCART": {
      const oldSpots = [...state.tripInfo.spots]
      return {...state,
        tripInfo: {
          ...state.tripInfo,
          spots: action.payload.concat(oldSpots)
        }
      }
    }
  }
  return state
}