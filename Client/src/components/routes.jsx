import React from "react"
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"
import Nav from "./nav.jsx"
import landing from "./landing.jsx"
import buildTrip from "./buildTrip.jsx"
import cart from "./cart.jsx"
import TripViewer from "./tripViewer.jsx"

let Routes = (props) => (

<HashRouter>
  <div>
    <Nav />
    <Route exact path="/" component={landing}/>
    <Route path="/buildTrip" component={buildTrip}/>
    <Route path="/cart" component={cart}/>
    <Route path="/tripViewer" component={TripViewer}/>
  </div>
</HashRouter>

)

export default Routes;