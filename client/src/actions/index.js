import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "./types";
import streams from "../api/stream";

import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const streamData = { ...formValues, userId };
    const { data } = await streams.post("/streams", streamData);
    dispatch({ type: CREATE_STREAM, payload: data });
    history.push("/");
  };
};

export const fetchStreams = () => {
  return async dispatch => {
    const { data } = await streams.get("/streams");
    dispatch({
      type: FETCH_STREAMS,
      payload: data
    });
  };
};

export const fetchStream = streamId => async dispatch => {
  const { data } = await streams.get(`/streams/${streamId}`);
  dispatch({
    type: FETCH_STREAM,
    payload: data
  });
};

export const editStream = (streamDetails, streamId) => async (
  dispatch,
  getState
) => {
  const formDetails = { ...streamDetails, userId: getState().auth.userId };
  const { data } = await streams.put(`/streams/${streamId}`, formDetails);

  dispatch({
    type: EDIT_STREAM,
    payload: data
  });
  history.push("/");
};

export const deleteStream = streamId => async dispatch => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({
    type: DELETE_STREAM,
    payload: streamId
  });
  history.push("/");
};
