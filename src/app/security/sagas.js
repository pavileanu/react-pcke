import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as types from './actionTypes'
import { handleAuthenticationCallback } from './auth'

function* parseAuthCallback() {
    const user = yield call(handleAuthenticationCallback);
    yield put({ type: types.USER_PROFILE_LOADED, payload: user });
}

export default function* () {
    yield all([takeLatest(types.HANDLE_AUTHENTICATION_CALLBACK, parseAuthCallback)])
}