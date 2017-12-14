import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { uploadTrip } from "../actions/uploadActions.js";
import { cloudinaryAction } from "../actions/cloudinary.js";
import { fetchTrips } from "../actions/tripsActions";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

@connect ((store) => {
  return {
    test: store.trips.uploadTrip,
    cloudinaryGallery: store.cloudinary
  }
})

class BuildSpot extends React.Component {
  
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
  
    postDataToServer() {
      //assemble data object
      //post to server
    }
  
  
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.dispatch(uploadTrip(e.target.value));
    }
  
    render() {
      return (
    <div>
      <div>Add a Spot!</div>
      <form onSubmit={this.handleSubmit}>
          <label> Spot Name: <input type="text" required />
          </label><br></br>
          <label> Spot Description: <textarea required />
          </label><br></br>
        <div id="uploaded" className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
    }
  }
  export default BuildSpot;