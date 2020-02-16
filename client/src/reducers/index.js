import { combineReducers } from "redux";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM
} from "../actions/types";
import { reducer as formReducer } from "redux-form";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const googleAuthReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
const streamReducer = (streams = [], { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
      return [...streams, payload];
    case FETCH_STREAMS:
      return [...payload];
    case FETCH_STREAM:
      return;
    default:
      return streams;
  }
};
export default combineReducers({
  auth: googleAuthReducer,
  form: formReducer,
  streams: streamReducer
});
