import { combineReducers } from 'redux';

import trips from './trips';
import cloudinary from './cloudinary';
import cart from './cart';
import login from './login';

export default combineReducers({
  trips,
  cloudinary,
  cart,
  login
});

