import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './nav.jsx';
import Landing from './landing.jsx';
import BuildTrip from './buildTrip.jsx';
import Cart from './cart.jsx';
import TripViewer from './tripViewer.jsx';
import AllTripInfo from './allTripInfo.jsx';
import BuildSpot from './buildSpot.jsx';


let Routes = (props) => (

  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" component={Landing}/>
      <Route path="/buildTrip" component={BuildTrip}/>
      <Route path="/buildSpot" component={BuildSpot}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/tripViewer" component={TripViewer}/>
      <Route path="/allTripInfo" component={AllTripInfo}/>
    </div>
  </BrowserRouter>

);

export default Routes;