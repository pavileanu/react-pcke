import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import securityReducer from '../security/reducer'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    security: securityReducer
    // ...  TODO: add reducers 
});

export default rootReducer;