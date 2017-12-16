import {Account} from '../../api';

import {ACCOUNT_CREATE_FAILURE, ACCOUNT_CREATE_SUCCESS  } from '../../constants';


const SuccessAction = (payload) => ({
    type: ACCOUNT_CREATE_SUCCESS,
    payload
});

const FailureAction = (payload) => ({
    type: ACCOUNT_CREATE_FAILURE,
    payload
});

export default (username, email, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        Account.Create(username, email, password)
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