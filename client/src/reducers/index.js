import { combineReducers } from "redux";
import { SIGN_IN, SIGN_OUT } from "../actions/types";
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
export default combineReducers({
  auth: googleAuthReducer,
  form: formReducer
});
