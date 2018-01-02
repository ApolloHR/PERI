import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import axios from 'axios';
import Login from './login.jsx';
import OneTrip from './oneTrip.jsx';
import { fetchTrips } from '../actions/tripsActions';
import { login } from '../actions/login';
import Infinite from './infinite.jsx';
import Search from './search.jsx';
import Profile from './profile.jsx';


@connect((store) => {
  return {
    trips: store.trips,
    search: store.search,
    auth: store.login
  }
})

class Landing extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTrips());
    console.log('isLoggedIn componentwillmount =');
    this.isLoggedIn();
  }

  isLoggedIn() {
    let _this = this;
    axios.post('/isLoggedIn', {}).then(response => {
      console.log('response.data success =', response.data);
      console.log('response.data.sessionID in landing.jsx =', response.data.sessionID);
      console.log('this.props in landing =', _this.props);
      console.log('login in landing =', login);

      if(response.data.sessionID) {
        let creds = response.data;
        _this.props.dispatch(login(creds));
      }
    })
    .catch(error => {
      console.log('response failure =');
      console.log(error);
    });
  }

  render () {
    return (
      <div>
      <Profile />
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns is-vcentered'>

                <Search/>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Landing;

       // <div className='container'>
         // <Infinite />
        //</div>



// axios.get(`https://res.cloudinary.com/peri/image/list/users.json`).then((res) => {
    //   console.log('axios res =', res);
    //   this.props.dispatch(cloudinaryAction(res));
    //   // this.setState({gallery: res.data.resources});
    // }).catch(function (error) {
    //   console.log('cloudinary axios catch error =', error);
    // });
    // console.log('this props cloudinaryGallery =', this.props.cloudinaryGallery)

/* <CloudinaryContext cloudName='peri'>
  <Image publicId='users.json' type='list'></Image>
</CloudinaryContext>
 */
  /* <div className='gallery'>
    <CloudinaryContext cloudName='peri'>
      {
        this.props.cloudinaryGallery.map(data => {
          return (
            <div className='responsive' key={data.public_id}>
              <div className='img'>
                <a target='_blank' href={`https://res.cloudinary.com/peri/image/upload/${data.public_id}.jpg`}>
                  <Image publicId={`${data.public_id}.jpg`}>
                    <Transformation
                      crop='scale'
                      width='300'
                      height='300'
                      dpr='auto'
                      responsive_placeholder='blank'
                    />
                  </Image>
                </a>
              <div className='desc'>Created at {data.created_at}</div>
            </div>
            </div>
          )
        })
      }
    </CloudinaryContext>
    <div className='clearfix'></div>
  </div> */