import {Personal} from '../../api';

import {TYPE_PERSONAL_LIST_FAILURE, TYPE_PERSONAL_LIST_SUCCESS  } from '../../constants';


const SuccessAction = (payload) => ({
  type: TYPE_PERSONAL_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: TYPE_PERSONAL_LIST_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Personal.ListType()
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