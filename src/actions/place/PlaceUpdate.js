import {Place} from '../../api';

import {PLACE_UPDATE_SUCCESS, PLACE_UPDATE_FAILURE } from '../../constants';


const SuccessAction = (payload) => ({
  type: PLACE_UPDATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PLACE_UPDATE_FAILURE,
  payload
});

export default (phone,url,adress) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Place.Update(phone,url,adress)
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