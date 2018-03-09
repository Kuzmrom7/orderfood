import {Adrress} from '../../api';

import {ADRRESS_CREATE_SUCCESS, ADRRESS_LIST_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: ADRRESS_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ADRRESS_LIST_FAILURE,
  payload
});

export default (name, idPlace) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Adrress.Create(name, idPlace)
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response);
      })
      .catch(error => {
        dispatch(FailureAction({error}));
        reject(error);
      })
  })
};