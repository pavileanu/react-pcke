import * as types from './actionTypes';

/*eslint sonarjs/no-small-switch: "off"*/
export default (state = {}, action) => {
    switch (action.type) {
        case types.USER_PROFILE_LOADED:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};