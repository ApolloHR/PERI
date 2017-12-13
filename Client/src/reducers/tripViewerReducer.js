export default function reducer(state = {
  test: 'Google Maps FTW',
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
        long: 115.0920,
        lat: -8.3405,
        elevation: 52,
        photo: 'https://goo.gl/WXtpYx'
      }
    ]
  }
}, action) {
  switch (action.payload) {

  }
  return state;
}