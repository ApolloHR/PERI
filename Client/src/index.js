import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import Landing from "./components/landing.jsx"
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
class App extends React.Component {

  uploadWidget() {
    let _this = this;
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
        <Landing />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));