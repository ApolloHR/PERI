
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p id="test"> Hello React project</p>
        <h1>To the moon!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));