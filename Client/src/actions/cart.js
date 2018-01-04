export function addSpotToCart(data) {
  return {
    type: 'ADD_SPOTTOCART', payload: data
  };
}

export function addTripToCart(data) {
  return {
    type: 'ADD_TRIPTOCART', payload: data
  };
}

export function cartThumbnail(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'CART_THUMBNAIL', payload: data
  };
}

export function cartTripInfo(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'CART_TRIPINFO', payload: data
  };
}

export function updateMap(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {
    type: 'CART_UPDATEMAP', payload: data
  };
}
