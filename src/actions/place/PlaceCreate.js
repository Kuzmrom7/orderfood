import {Place} from '../../api';

import {PLACE_CREATE_FAILURE, PLACE_CREATE_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: PLACE_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PLACE_CREATE_FAILURE,
  payload
});

export default (name, nametypeplace) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Place.Create(name, nametypeplace)
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