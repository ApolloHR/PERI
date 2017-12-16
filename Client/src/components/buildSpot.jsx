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
        _this.props.dispatch(cloudinaryGallery(res));
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