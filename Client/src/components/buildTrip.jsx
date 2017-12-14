import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { uploadTrip } from "../actions/uploadActions.js";
import { cloudinaryAction } from "../actions/cloudinary.js";
import { fetchTrips } from "../actions/tripsActions";
import { NavLink } from 'react-router-dom';
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

@connect ((store) => {
  return {
    test: store.trips.uploadTrip,
    cloudinaryGallery: store.cloudinary
  }
})

class BuildTrip extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: "peri", theme: "white", cropping: 'server', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ["local", "url", "camera", "google_photos", "facebook", "instagram"], show_powered_by: false, upload_preset: "uploadperi", tags:["users"]},
    function(error, result) {
      if(error) {
        console.log("upload widget error =", error);
      }
      console.log('uploadwidget result =', result);
      let res = result.map((e) => {
        return e.url;
      })
      _this.props.dispatch(cloudinaryThumbnail(res));
    });
  }

  handleSubmit(e) {
    e.preventDefault();    
    const form = e.target;
    // for (let field in this.refs)
    console.log('handlesubmit e.target.val =', e.target.val); 
    console.log('this.props.cloudinaryGallery =', this.props.cloudinaryGallery);
    
    // this.props.dispatch(uploadTrip(e.target.value));
  }


  submitTrip() {

  }

  render() {
    return (
  <div>

    <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column main-search">
                  <p className="title">Build a Trip!</p>
                  <form >
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input" type="text" id="tripname" name="tripname" placeholder="Enter Trip Name"/>
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" id="destination" name="destination" placeholder="Enter Destination" />
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" id="tripdescription" name="tripdescription" placeholder="Enter Trip Description" />
                      </div>                  
                    <div id="uploaded" className="control">
                      <button onClick={this.uploadWidget.bind(this)} className="button is-secondary">
                        Add Cover Image
                      </button>
                    </div>
                    <div className="control">
                      <NavLink to="/buildSpot" activeClassName="active">
                        <button className="button is-primary" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} >Submit</button>
                      </NavLink>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

  </div>
  )
  }
}
export default BuildTrip;