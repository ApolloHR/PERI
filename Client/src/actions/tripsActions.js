export function fetchTrips() {
  return {type: "FETCH_TRIPS_SUCCESS", payload:[{
    username: 'nick',
    tripName: 'London 2017',
    destination: 'London',
    description: 'Lads trip to UK 2017',
    thumbnail: 'https://media.timeout.com/images/103042848/image.jpg',
    spots: [{spotID: 1}]
  },
  {
    username: 'larry',
    tripName: 'London 2017',
    destination: 'London',
    description: 'Lads trip to UK 2017',
    thumbnail: 'http://knowledge.wharton.upenn.edu/wp-content/uploads/2016/03/rio.jpg',
    spots: [{spotID: 2}]
  }]}
}