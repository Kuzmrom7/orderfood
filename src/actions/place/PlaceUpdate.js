import {Place} from '../../api';

import {PLACE_UPDATE_FAILURE, PLACE_UPDATE_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: PLACE_UPDATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PLACE_UPDATE_FAILURE,
  payload
});

export default (id, city, phone, url) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Place.Update(id, city, phone, url)
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