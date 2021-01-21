import * as util from './helpers'
import settings from '../common/settings'

export const login = async () => {
    const { AUTH } = settings;
    const state = util.generateRandomString();
    localStorage.setItem('pkce_state', state);

    const codeVerifier = util.generateRandomString();
    localStorage.setItem('pkce_code_verifier', codeVerifier);

    const codeChallenge = await util.pkceChallengeFromVerifier(codeVerifier);

    const url =
        AUTH.authorization_endpoint +
        "?response_type=code" +
        "&client_id=" +
        encodeURIComponent(AUTH.client_id) +
        "&state=" +
        encodeURIComponent(state) +
        "&scope=" +
        encodeURIComponent(AUTH.requested_scopes) +
        "&redirect_uri=" +
        encodeURIComponent(AUTH.redirect_uri) +
        "&code_challenge=" +
        encodeURIComponent(codeChallenge) +
        "&code_challenge_method=S256" +
        "&acr_values=" +
         encodeURIComponent(AUTH.acr_values);
    window.location.assign(url);
};