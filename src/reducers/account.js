import {createReducer, Storage} from "../utils";
import {ACCOUNT_CREATE_FAILURE, ACCOUNT_CREATE_SUCCESS,ACCOUNT_FETCH_SUCCESS, ACCOUNT_FETCH_FAILURE} from "../constants";

const initialState = {
  meta: {
    id: "",
    email: "",
    username: "",
    balance: "",
    subscription: "",
  },
  emails: [],
};

const convert = (payload) => {
  let user = {
      username: payload.username,
      email: payload.email
  };

  return user;
};

export default createReducer(initialState, {

  [ACCOUNT_CREATE_SUCCESS]: (state, payload) => {
    let token = (!!payload && !!payload.token) ? payload.token : null;
    let newState = Object.assign({}, state);
    Storage().set("token", token);
    return newState;
  },
  [ACCOUNT_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [ACCOUNT_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, convert(payload));
  },
  [ACCOUNT_FETCH_FAILURE]: (state) => {
    Storage().remove("token");
    return Object.assign({}, state);
  },
});