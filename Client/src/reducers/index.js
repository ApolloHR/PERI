import { combineReducers } from 'redux';

import trips from './trips';
import tripView from './tripViewerReducer';
import cloudinary from './cloudinary';
import search from './searchReducer';
import cart from './cart';

export default combineReducers({
  trips,
  tripView,
  cloudinary,
  search,
  cart  
});
  
