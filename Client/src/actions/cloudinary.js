export function cloudinaryThumbnail(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_THUMBNAIL', payload: data
  };
}

export function cloudinaryGallery(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_GALLERY', payload: data
  };
}

export function cloudinaryTripInfo(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_TRIPINFO', payload: data
  };
}

export function cloudinarySpotInfo(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'FETCH_SPOTINFO', payload: data
  };
}

export function cloudinaryAddSpot(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'ADD_SPOTINFO', payload: data
  };
}