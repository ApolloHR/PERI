export function cloudinaryAction(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_GALLERY', payload: data
  };
}

export function cloudinaryThumbnail(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_THUMBNAIL', payload: data
  };
}