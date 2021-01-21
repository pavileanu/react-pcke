import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import App from './app/app'
import configureStore from './app/state/store'
import { ConnectedRouter } from 'connected-react-router';


const initialState = window.___INITIAL_STATE__
const history = createBrowserHistory();

const store = configureStore(initialState, history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));