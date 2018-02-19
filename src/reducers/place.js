import {createReducer} from "../utils";
import {
  PLACE_CREATE_FAILURE,
  PLACE_CREATE_SUCCESS,
  PLACE_FETCH_FAILURE,
  PLACE_FETCH_SUCCESS,
  PLACE_UPDATE_FAILURE,
  PLACE_UPDATE_SUCCESS,
  TYPEPLACE_LIST_SUCCESS
} from "../constants";


const convert = (payload) => {

  return {
    typePlace: {
      name: payload.meta
    }

  };
};
const convert_place = (payload) => {
  let user = {
    name: payload.name,
    phone: payload.phone,
    url: payload.url,
    adress: payload.adress,
  };

  return user;
};

const stateExtension = (state) => {
  Object.defineProperty(state, 'filter', {
    value: (match) => {
      return Object.keys(state).reduce((prev, el) => {
        const item = state[el];
        if ((item.meta.name.toLowerCase().indexOf(match.toLowerCase()) !== -1)
          || (item.meta.description.toLowerCase().indexOf(match.toLowerCase()) !== -1)) prev[el] = item;
        return prev;
      }, {});
    },
    writable: true,
    enumerable: false
  });

  return state;
};


const initialState = stateExtension({});

export const place = createReducer(initialState, {
  [PLACE_CREATE_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[payload[key].meta] = convert(payload[key]);
    });
    return newState;
  },
  [PLACE_CREATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [TYPEPLACE_LIST_SUCCESS]: (state, payload) => {
    let newState = initialState;
    Object.keys(payload).forEach(function (key) {
      newState[key] = payload[key].meta.name;
    });
    return newState;
  },
  [PLACE_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, convert_place(payload));
  },
  [PLACE_FETCH_FAILURE]: (state) => {
    return Object.assign({}, state);
  },
  [PLACE_UPDATE_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, convert_place(payload));
  },
  [PLACE_UPDATE_FAILURE]: (state) => {
    return Object.assign({}, state);
  }


});

export default place;