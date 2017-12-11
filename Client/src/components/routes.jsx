import React from "react"
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"
import Nav from "./nav.jsx"
import landing from "./landing.jsx"
import buildTrip from "./buildTrip.jsx"
import cart from "./cart.jsx"

let Routes = (props) => (

<HashRouter>
  <div>
    <Nav />
    <Route exact path="/" component={landing}/>
    <Route path="/buildTrip" component={buildTrip}/>
    <Route path="/cart" component={cart}/>
  </div>
</HashRouter>

)

export default Routes;