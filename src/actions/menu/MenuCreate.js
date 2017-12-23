import {Menu} from '../../api';

import {MENU_CREATE_SUCCESS,MENU_CREATE_FAILURE} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_CREATE_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_CREATE_FAILURE,
  payload
});

export default (name, placename,url) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.Create(name, placename,url)
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