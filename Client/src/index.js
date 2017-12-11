import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import Landing from "./components/landing.jsx"
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
class App extends React.Component {

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'apollohr', cropping: 'server', theme: 'white', stylesheet: '#cloudinary-overlay { background-color: transparent; }', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ['local', 'url', 'camera', 'google_photos', 'facebook', 'instagram'], show_powered_by: false, folder: 'user_photos', upload_preset: 'uploadperi', tags:['users', 'content']},
    function(error, result) {
      console.log(result);
    });
  }

  render () {
    return (
      <div>
        <p id="test"> Hello React project!</p>
        <h1>To the moon!</h1>
        <div id="uploaded" className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div>
        <Landing />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));