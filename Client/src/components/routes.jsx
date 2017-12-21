import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './nav.jsx';
import Landing from './landing.jsx';
import PostTrip from './postTrip.jsx';
import Cart from './cart.jsx';
import TripViewer from './tripViewer.jsx';
import AllTripInfo from './allTripInfo.jsx';
import BuildSpot from './buildSpot.jsx';
import Invite from './invite.jsx';



let Routes = (props) => (

  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" component={Landing}/>
      <Route path="/postTrip" component={PostTrip}/>
      <Route path="/buildSpot" component={BuildSpot}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/tripViewer" component={TripViewer}/>
      <Route path="/allTripInfo" component={AllTripInfo}/>
      <Route path="/invite" component={Invite}/>
    </div>
  </BrowserRouter>

);

export default Routes;