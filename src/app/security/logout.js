import { appendQueryParam } from "./helpers";
import settings from '../common/settings'

export default (user) => {
    const { AUTH } = settings;
    let url = appendQueryParam(AUTH.end_session_endpoint, 'post_logout_redirect_uri', AUTH.post_logout_redirect_uri);
    url = appendQueryParam(url, 'id_token_hint', user.id_token);
    console.log(url);
    window.location.assign(url);
}

