import settings from '../common/settings'
import * as util from './helpers'
import { startSession } from './sessionMonitor'

export const handleAuthenticationCallback = () => {
    const { AUTH, DEBUG } = settings;
    return new Promise((resolve, reject) => {
        const q = util.parseQueryString(window.location.search.substring(1));
        if (q.error) {
            console.error('Error returned from authorization server:' + q.error);
            reject(q.error);
        } else if (q.code) {
            if (localStorage.getItem('pkce_state') != q.state) {
                console.error('Invalid state');
            } else {
                util.sendPostRequest(AUTH.token_endpoint, {
                    'grant_type': 'authorization_code',
                    'code': q.code,
                    'client_id': AUTH.client_id,
                    'redirect_uri': AUTH.redirect_uri,
                    'scope': AUTH.requested_scopes,
                    'code_verifier': localStorage.getItem('pkce_code_verifier')
                }, (request, body) => {
                    if (DEBUG) {
                        console.table(body);
                    }
                    //NOTE: some idps support session_state -> 
                    startSession(q.session_state);
                    //TODO: load app specific user profile prior to resolve
                    resolve(body);
                }, (request, error) => {
                    console.error(error);
                    reject(error);
                });
            }
            localStorage.removeItem('pkce_state');
            localStorage.removeItem('pkce_code_verifier');
        } else {
            resolve(true);
        }
    });
};