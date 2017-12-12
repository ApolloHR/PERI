import { combineReducers } from "redux"

import trips from "./trips"
import tripView from "./tripViewerReducer"
import cloudinary from "./cloudinary"

export default combineReducers({
  trips,
  tripView,
  cloudinary
})