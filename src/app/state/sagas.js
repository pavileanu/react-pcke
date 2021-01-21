
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import securitySagas from '../security/sagas'

const sagaMiddleware = createSagaMiddleware();

/*eslint sonarjs/no-one-iteration-loop: "off"*/

function* allSagas(history, onError) {
    try {
        yield all([securitySagas() /* TODO: add sagas per api tag */])
    } catch (e) {
        console.error(e);
        if (onError) {
            onError(e);
        }
    }
}

function* rootSaga(history, onError) {
    try {
        while (true) {
            yield call(allSagas, history, onError);
            break;
        }
    } catch (e) {
        console.error(e);
        if (onError) {
            onError(e);
        }
    }
}


export default {
    middleware: sagaMiddleware,
    start: (history, onError) => sagaMiddleware.run(rootSaga, history, onError)
}