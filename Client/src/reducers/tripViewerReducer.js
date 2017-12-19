//PHILLIP DEC 18 
//I don't think we're using this file anymore? At least I'm not using it for anything
//also uploadActions.js, which points to this file

export default function reducer(state = {
  test: 'Google Maps FTW',
  uploadTrip: {},
  trip: {
    username: 'huynh.r.k@gmail.com',
    tripName: 'vacation in bali',
    destination: 'Bali',
    description: 'vacay after the bootcamp!',
    thumbnail: 'https://goo.gl/HCgNo1',
    spots: [
      {
        spotName: 'beach1',
        description: 'description for this spot hello world',
        long: 115.0920,
        lat: -8.3405,
        elevation: 32,
        photo: 'https://goo.gl/fdc8y3'
      },
      {
        spotName: 'beach2',
        description: 'description for this spot hello world',
        long: 115.2126,
        lat: -8.6705,
        elevation: 52,
        photo: 'https://goo.gl/WXtpYx'
      }
    ]
  }
}, action) {
  switch (action.type) {
    case "UPLOAD_TRIP": {
      return {...state, uploadTrip: action.payload}
    }
  }
  return state;
}