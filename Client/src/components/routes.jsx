import React from "react"
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"
import Nav from "./nav.jsx"
import Landing from "./landing.jsx"
import BuildTrip from "./buildTrip.jsx"
import Cart from "./cart.jsx"
import TripViewer from "./tripViewer.jsx"
import AllTripInfo from "./allTripInfo.jsx"

let Routes = (props) => (

<HashRouter>
  <div>
    <Nav />
    <Route exact path="/" component={Landing}/>
    <Route path="/buildTrip" component={BuildTrip}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/tripViewer" component={TripViewer}/>
    <Route path="/allTripInfo" component={AllTripInfo}/>
  </div>
</HashRouter>

)

export default Routes;