export function fetchTrips() {

console.log('fetchTrips was called');

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log('tirps response',response);

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
    tripName: 'Brazil 2017',
    destination: 'Brazil',
    description: 'Lads trip to Brazil 2017',
    thumbnail: 'http://knowledge.wharton.upenn.edu/wp-content/uploads/2016/03/rio.jpg',
    spots: [{spotID: 2}]
  }]}

  })
  .catch(function (error) {
    console.log(error);
  });




}