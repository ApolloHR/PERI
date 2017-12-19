import { combineReducers } from 'redux';

import trips from './trips';
import tripView from './tripViewerReducer';
import cloudinary from './cloudinary';
import search from './searchReducer';

export default combineReducers({
  trips,
  tripView,
  cloudinary,
  search
});
  
