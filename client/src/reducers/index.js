import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import googleAuthReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: googleAuthReducer,
  form: formReducer,
  streams: streamReducer
});
