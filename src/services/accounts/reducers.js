/*eslint sonarjs/no-small-switch: "off"*/
import * as actionTypes from './action-types';

const initalState = Object.create(null);

export default (state = initalState, { type, payload}) => {
    switch(type) {
        case actionTypes.SIGN_UP:
            return Object.assign({}, state, { current : new Date() });
        default:
            return state;
    }
}