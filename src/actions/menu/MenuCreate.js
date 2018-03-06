import {Menu} from '../../api';

import {MENU_CREATE_FAILURE, MENU_CREATE_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_CREATE_FAILURE,
  payload
});

export default (name, placeid, url) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.Create(name, placeid, url)
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