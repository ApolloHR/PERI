import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import Routes from "./components/routes.jsx"
import { BrowserRouter } from 'react-router-dom'
class App extends React.Component {

  

  render () {
    return (
      <div>
        <p id="test"> Hello React project!</p>
        <h1>To the moon!</h1>        
          <Routes />        
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('app'));