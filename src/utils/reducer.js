import {combineReducers} from "redux";
import * as reducer from "../reducers";



function get() {
  let reducers = {};
  reducers["account"] = reducer.account;
  reducers["session"] = reducer.session;
  reducers["place"] = reducer.place;
  reducers["menu"] = reducer.menu;

  return reducers;
}

const rootReducer = combineReducers(get());

export default rootReducer