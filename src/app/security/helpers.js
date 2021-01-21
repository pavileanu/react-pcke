export const generateRandomString = () => {
    var array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ("0" + dec.toString(16)).substr(-2)).join("");
}

export const sha256 = plain => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
}

export const base64urlencode = str => {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

export const pkceChallengeFromVerifier = async v => {
    const hashed = await sha256(v);
    return base64urlencode(hashed);
}

export const appendQueryParam = (url, name, value) => {
    if (url.indexOf('?') < 0) {
        url += '?';
    }
    if (url[url.length - 1] !== '?') {
        url += '&';
    }
    url += encodeURIComponent(name);
    url += '=';
    url += encodeURIComponent(value);
    return url;
}

export const parseQueryString = string => {
    if (string == "") {
        return {};
    }
    var segments = string.split("&").map(s => s.split("="));
    var queryString = {};
    segments.forEach(s => (queryString[s[0]] = s[1]));
    return queryString;
}

export const sendPostRequest = (url, params, success, error) => {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.onload = function () {
        var body = {};
        try {
            body = JSON.parse(request.response);
        } catch(e) { console.error(e)}

        if (request.status == 200) {
            success(request, body);
        } else {
            error(request, body);
        }
    };
    request.onerror = function () {
        error(request, {});
    };
    var body = Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");
    request.send(body);
}