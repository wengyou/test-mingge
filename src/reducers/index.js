import { combineReducers } from 'redux'
import userInfo from "./userInfo";
import test from "./test";
import comment from "./comment"

export default combineReducers({
  userInfo,
  test,
  comment
})
