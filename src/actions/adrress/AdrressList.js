import {Adrress} from '../../api';

import {ADRRESS_LIST_FAILURE, ADRRESS_LIST_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: ADRRESS_LIST_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ADRRESS_LIST_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Adrress.List()
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