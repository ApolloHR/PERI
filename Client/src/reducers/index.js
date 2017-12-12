import { combineReducers } from "redux"

import trips from "./trips"
import tripView from "./tripViewerReducer"

export default combineReducers({
  trips,
  tripView
})