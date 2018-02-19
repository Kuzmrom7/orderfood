import {Personal} from '../../api';

import {PERSONAL_CREATE_FAILURE, PERSONAL_CREATE_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: PERSONAL_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: PERSONAL_CREATE_FAILURE,
  payload
});

export default (nametypePerson, fio, phone) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Personal.Create(nametypePerson, fio, phone)
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