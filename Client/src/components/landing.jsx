import React from "react";
import { connect } from "react-redux";
import OneTrip from "./oneTrip.jsx";
import { fetchTrips } from "../actions/tripsActions";
import Login from "./login.jsx";
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

@connect((store) => {
  return {
    trips: store.trips,
    cloudinary: store.cloudinary.gallery
  }
})
class Landing extends React.Component {

  componentDidMount() {
    axios.get('https://res.cloudinary.com/apolloHR/image/list/users.json').then(res => {
      console.log('axios res =', res);
      // this.setState({gallery: res.data.resources});
    });
    this.props.dispatch(fetchTrips());
    console.log('this props cloudinary =', this.props.cloudinary)
    
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

        <div>Landing Image wall goes here</div>
        <div className="main">
          <div className="gallery">
            <CloudinaryContext cloudName="apolloHR">
              {
                this.props.cloudinary.map(data => {
                  return (
                    <div className="responsive" key={data.public_id}>
                      <div className="img">
                        <a target="_blank" href={`https://res.cloudinary.com/apolloHR/image/upload/${data.public_id}.jpg`}>
                          <Image publicId={data.public_id}>
                            <Transformation crop="scale" width="300" height="200" dpr="auto" responsive_placeholder="blank" />
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
        <Login />
        <div>{this.props.trips.test}</div>
      </div>
    )
  }
}

export default Landing;