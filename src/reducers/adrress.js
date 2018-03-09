import {createReducer} from "../utils";
import {ACCOUNT_CREATE_FAILURE, ADRRESS_CREATE_SUCCESS, ADRRESS_LIST_FAILURE, ADRRESS_LIST_SUCCESS} from "../constants";



const convert_adrress= (payload) => {
  return {
    id: payload.id,
    name: payload.name,
    place: payload.place
  };
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

export const adrress = createReducer(initialState, {
    [ADRRESS_LIST_SUCCESS]: (state, payload) => {
      let newState = initialState;
      Object.keys(payload).forEach(function (key) {
        newState[key] = convert_adrress(payload[key]);
      });
      return newState;
    },
    [ADRRESS_LIST_FAILURE]: (state) => {
      return Object.assign({}, state);
    },
    [ADRRESS_CREATE_SUCCESS]: (state) => {
      return Object.assign({}, state);
    },
    [ACCOUNT_CREATE_FAILURE]: (state) => {
      return Object.assign({}, state);
    }
  },
  {});

export default adrress;