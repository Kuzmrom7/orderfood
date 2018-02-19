import {Account} from '../../api'
import {ACCOUNT_FETCH_FAILURE, ACCOUNT_FETCH_SUCCESS} from "../../constants"

const SuccessAction = (payload) => ({
  type: ACCOUNT_FETCH_SUCCESS,
  payload
});

const FailureAction = (payload) => ({
  type: ACCOUNT_FETCH_FAILURE,
  payload
});

export default () => (dispatch) => {
  return new Promise((resolve, reject) => {
    Account.Fetch()
      .then(response => {
        dispatch(SuccessAction(response));
        resolve(response)
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error)
      })
  })
}

