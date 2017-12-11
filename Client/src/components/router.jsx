import React from "react"
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom"
import Nav from "./nav"

let Router = () => (

<HashRouter>
  <div>
    <Nav />
    <Route exact path="/" component={Landing}/>
    <Route path="/buildTrip" component={buildTrip}/>
    <Route path="/cart" component={cart}/>
  </div>
</HashRouter>
  )


