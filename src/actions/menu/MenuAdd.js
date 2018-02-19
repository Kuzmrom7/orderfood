import {Menu} from '../../api';
import {MENU_DISH_FAILURE, MENU_DISH_SUCCESS} from '../../constants';


const SuccessAction = (payload) => ({
  type: MENU_DISH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: MENU_DISH_FAILURE,
  payload
});

export default (nameDish, nameMenu) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Menu.Add(nameDish, nameMenu)
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