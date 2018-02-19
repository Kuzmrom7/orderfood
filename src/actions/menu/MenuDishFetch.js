import {Menu} from '../../api';
import {MENU_FETCH_FAILURE, MENU_FETCH_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_FETCH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_FETCH_FAILURE,
  payload
});

export default (nameMenu) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.MenuFetch(nameMenu)
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