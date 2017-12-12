import React from "react";
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { uploadTrip } from '../actions/uploadActions.js';
import { connect } from "react-redux";

@connect ((store) => {
  return {
    test: store.trips.uploadTrip
  };
})

class BuildTrip extends React.Component {

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'apollohr', cropping: 'server', theme: 'white', stylesheet: '#cloudinary-overlay { background-color: transparent; }', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ['local', 'url', 'camera', 'google_photos', 'facebook', 'instagram'], show_powered_by: false, upload_preset: 'uploadperi', tags:['users', 'content']},
    function(error, result) {
      console.log(result);
    });
  }


  handleChange(e) {
    this.props.dispatch(uploadTrip(e.target.value));
    console.log(this.props.test);
  }

  render() {
    return (
  <div>
    <div>Build a Trip!</div>
    <form onSubmit={this.handleSubmit}>
        <label> Trip Name: <input type="text" onChange={this.handleChange.bind(this)}/>
        </label><br></br>
        <label> Destination: <input type="text" onChange={this.handleChange.bind(this)} />
        </label><br></br>
        <label> Trip Description: <textarea onChange={this.handleChange.bind(this)}/>
        </label><br></br>
        <div id="uploaded" className="upload">
        <button onClick={this.uploadWidget.bind(this)} className="upload-button">
          Add Image
        </button>
      </div>
        <input type="submit" value="Submit" />
      </form>
    <div>
      <Image cloudName="apolloHR" publicId="user_uploads/j0ymw17uxbvzhju3amq6" width="300" crop="scale"/>
      {/* <CloudinaryContext cloudName="apolloHR">
        <Image publicId="user_uploads">
          <Transformation width="200" crop="scale" angle="10"/>
        </Image>
      </CloudinaryContext> */}
    </div>
  </div>
  )
  }
}
export default BuildTrip;