import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { uploadTrip } from "../actions/uploadActions.js";
import { cloudinarySpotInfo } from "../actions/cloudinary.js";
import { cloudinaryAddSpot } from "../actions/cloudinary.js";
import { cloudinaryGallery } from "../actions/cloudinary.js";
import { fetchTrips } from "../actions/tripsActions";
import { NavLink } from 'react-router-dom';

@connect ((store) => {
  return {
    cloudinaryStore: store.cloudinary
  }
})

class BuildSpot extends React.Component {
  
  convertToDecimal(loc) {
    //degrees, minutes, seconds ["79", "deg", "34'", "15.49"", "W"]
    //North and East are positive, South and West are negative
    //if last element of array is South or West, multiple by -1
    if(!loc) {
      return 1;
    }
    let location = loc.split(' ');
    let direction = location[4];
    let seconds = location[3];
    let minutes = location[2];
    let degrees = location[0];
    seconds = seconds.slice(0, seconds.length-1);
    minutes = minutes.slice(0, minutes.length-1);
    let dd = (seconds/3600) + (minutes/60) + degrees;    
    if (direction === 'S' || direction === 'W') {
      dd = dd*(-1);
    }
    if (direction === 'E' || direction === 'N') {
      dd = dd*1;
    }
    console.log('decimalized geolocation =', dd);
    return dd;
  };  
  
  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: "peri", theme: "white", cropping: 'server', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ["local", "url", "camera", "google_photos", "facebook", "instagram"], show_powered_by: false, upload_preset: "uploadperi", tags:["users"]},
    function(error, result) {
      if(error) {
        console.log("upload widget error =", error);
      }
      let url = result.map((e) => {
        return e.url;
      })
      let info = {..._this.props.cloudinaryStore.tempSpot};
      info.lat = _this.convertToDecimal(result[0].image_metadata.GPSLatitude);
      info.long = _this.convertToDecimal(result[0].image_metadata.GPSLongitude);
      info.elevation = result[0].image_metadata.elevation;
      _this.props.dispatch(cloudinarySpotInfo(info));
      _this.props.dispatch(cloudinaryGallery(url));
    });
  }
  
  handleChange(e) {
    let info = {...this.props.cloudinaryStore.tempSpot};
    info[e.target.name] = e.target.value;
    this.props.dispatch(cloudinarySpotInfo(info));
  }

  handleSubmit(e) {
    let info = {...this.props.cloudinaryStore.tempSpot};
    info.photo = this.props.cloudinaryStore.gallery[this.props.cloudinaryStore.gallery.length-1];
    this.props.dispatch(cloudinaryAddSpot(info));
  }

  handleSubmitOne(e) {
    e.preventDefault();
    let info = {...this.props.cloudinaryStore.tempSpot};
    info.photo = this.props.cloudinaryStore.gallery[this.props.cloudinaryStore.gallery.length-1];
    console.log('buildSpot handleSubmit info =', info); 
    this.props.dispatch(cloudinaryAddSpot(info));    
  }
  
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column main-search">
                  <p className="title">Add a Place!</p>
                  <div className="field is-grouped">
                    <form >
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          name="spotName"
                          placeholder="Enter Place Name"
                          onChange={this.handleChange.bind(this)}
                          required
                        />
                      </div>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          name="description"
                          placeholder="Enter Place Description"
                          onChange={this.handleChange.bind(this)}
                          required
                        />
                      </div>
                        <div className="control">
                            <button
                              className="button is-primary"
                              type="submit"
                              value="submit"
                              onClick={this.handleSubmitOne.bind(this)} >
                              Add another spot!
                            </button>
                        </div>
                        <div className="control">
                          <NavLink to="/tripViewer"
                            activeClassName="active">
                            <button
                              className="button is-primary"
                              type="submit"
                              value="submit"
                              onClick={this.handleSubmit.bind(this)} >
                              Submit All
                            </button>
                          </NavLink>
                        </div>
                    </form>
                    <div id="uploaded" className="control">
                      <button 
                        onClick={this.uploadWidget.bind(this)} 
                        className="button is-secondary">
                        Add Location Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  }
  export default BuildSpot;