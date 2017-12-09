import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import Landing from "./components/landing.jsx"
class App extends React.Component {
  render () {
    return (
      <div>
        <p id="test"> Hello React project!</p>
        <h1>To the moon!</h1>
        <Landing />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));