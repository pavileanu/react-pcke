import * as actionTypes from './action-types';

export const signup = (registration) => ({
    type: actionTypes.SIGNUP_REQUEST,
    payload: registration
});