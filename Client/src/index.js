import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import Routes from "./components/routes.jsx"
import { BrowserRouter } from 'react-router-dom'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
class App extends React.Component {

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'apollohr', cropping: 'server', theme: 'white', stylesheet: '#cloudinary-overlay { background-color: transparent; }', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ['local', 'url', 'camera', 'google_photos', 'facebook', 'instagram'], show_powered_by: false, upload_preset: 'uploadperi', tags:['users', 'content']},
    window.cloudinary.openUploadWidget({ cloud_name: 'apollohr', upload_preset: 'uploadperi', tags:['']},
    function(error, result) {
      console.log(result);
    });
  }

  render () {
    return (
      <div>
        <p id="test"> Hello React project!</p>
        <h1>To the moon!</h1>
        <div className="upload">
          <button onClick={this.uploadWidget.bind(this)} className="upload-button">
            Add Image
          </button>
        </div>
          <Routes />
        <div>
          <Image cloudName="apolloHR" publicId="public_id" width="300" crop="scale"/>
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

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('app'));