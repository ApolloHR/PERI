export default function reducer(state={
  gallery: [],
  thumbnail: '',
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
  }
  return state
}