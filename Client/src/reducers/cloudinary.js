export default function reducer(state={
  gallery: [],
  thumbnail: '',
  tripInfo: {},
}, action) {
  switch (action.type) {
    case "FETCH_GALLERY": {
      let oldImages = [...state.gallery];
      let allImages = oldImages.concat(action.payload);
      console.log('allImages =', allImages);
      return {
        ...state, 
        gallery: [...state.gallery, allImages]
      }
    }
    case "FETCH_THUMBNAIL": {
      return {...state, thumbnail: action.payload}
    }
    case "FETCH_TRIPINFO": {
      return {...state, tripInfo: action.payload}
    }
  }
  return state
}