import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import settings  from '../common/settings'
import sagas from './sagas'
import rootReducer from './reducers'

export default (initialState = {}, history, onSagaError) => {
    const { DEBUG } = settings;
    const composeEnhancers = DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ maxAge: 100 }) : compose;

    const middleware = [routerMiddleware(history), sagas.middleware];

    const store = createStore(rootReducer(history), initialState,
        composeEnhancers(applyMiddleware(...middleware)));

    sagas.start(history, onSagaError);

    return store;
}