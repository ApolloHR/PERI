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
      _this.props.dispatch(cloudinaryAction(res));
    });
    console.log('this.props.cloudinaryGallery =', this.props.cloudinaryGallery);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let _this = this;
    // for (let field in this.refs)
    console.log('handlesubmit this =', this);

    console.log('form data =', formData);
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
                  <form onSubmit={this.handleSubmit} >
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
                    <div className="control">
                      <button className="button is-primary">Submit</button>
                    </div>
                    <div id="uploaded" className="upload">
                      <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Cover Image
                      </button>
                    </div>
                    <NavLink to="/buildSpot" activeClassName="active">
                      <input type="submit" value="Submit"/>
                    </NavLink>
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