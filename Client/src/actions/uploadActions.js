export function uploadTrip(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {type: 'UPLOAD_TRIP', payload: data
  };

}