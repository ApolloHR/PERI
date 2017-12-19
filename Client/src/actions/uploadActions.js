//Phillip 10/18
//I don't think we're using this file anymore, at least I'm not
//Also tripviewerreducer.js, which this points to

export function uploadTrip(data) {
  // insert function that takes the parameter from buildTrip form and sets the new payload
  return {type: 'UPLOAD_TRIP', payload: data
  };

}