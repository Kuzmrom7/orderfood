import {Personal} from '../../api';

import {PERSONAL_LIST_FAILURE, PERSONAL_LIST_SUCCESS  } from '../../constants';


const SuccessAction = (payload) => ({
  type: PERSONAL_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PERSONAL_LIST_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Personal.List()
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