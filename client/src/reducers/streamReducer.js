import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";
import * as _ from "lodash";

const streamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload.id);
    default:
      return state;
  }
};

export default streamReducer;
