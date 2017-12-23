import {combineReducers} from "redux";
import * as reducer from "../reducers";



function get() {
  let reducers = {};
  reducers["account"] = reducer.account;
  reducers["session"] = reducer.session;
  reducers["place"] = reducer.place;
  reducers["menu"] = reducer.menu;
  reducers["dish"] = reducer.dish;
  reducers["type_dishes"] = reducer.type_dishes;
  reducers["menu_dish_fetch"] = reducer.menu_dish_fetch;

  return reducers;
}

const rootReducer = combineReducers(get());

export default rootReducer