import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { render } from 'react-dom';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { cloudinaryAction } from "../actions/cloudinary";
import Login from "./login.jsx";
import OneTrip from "./oneTrip.jsx";
import { fetchTrips } from "../actions/tripsActions";

@connect((store) => {
  return {
    trips: store.trips,
    cloudinaryGallery: store.cloudinary.gallery
  }
})
class Landing extends React.Component {

  componentDidMount() {
    axios.get('https://res.cloudinary.com/peri/image/list/users.json').then((res) => {
      console.log('axios res =', res);
      this.props.dispatch(cloudinaryAction(res));
      // this.setState({gallery: res.data.resources});
    }).catch(function (error) {
      console.log('cloudinary axios catch error =', error);
    });
    console.log('this props cloudinaryGallery =', this.props.cloudinaryGallery)
    this.props.dispatch(fetchTrips());
    //BENJI is working on this
    // axios.get('/')
    //   .then((response) => {
    //     console.log('response lin 18', response);
    //   })
    //   .catch((error) => {
    //     console.log('eror =', error);
    //   })
  }


  render () {
    return (
      <div>
        <form className="landing-search">
          <input type="text" placeholder="Find your next adventure..."/>
          <input type="submit" value="Search" />
        </form>
        <div>{this.props.trips.allTrips.map((tripObj, i) => (
             <OneTrip trip={tripObj} key={i}/>
        ))}</div>
        <div className="main">
          <div className="gallery">
            <CloudinaryContext cloudName="peri">
              {
                this.props.cloudinaryGallery.map(data => {
                  return (
                    <div className="responsive" key={data.public_id}>
                      <div className="img">
                        <a target="_blank" href={`https://res.cloudinary.com/peri/image/upload/${data.public_id}.jpg`}>
                          <Image publicId={`${data.public_id}.jpg`}>
                          </Image>
                        </a>
                      <div className="desc">Created at {data.created_at}</div>
                    </div>
                    </div>
                  )
                })
              }
            </CloudinaryContext>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;