import settings from '../common/settings'

export const startSession = (state) => {
    const { AUTH } = settings;
    const frame = document.createElement('iframe');
    frame.style.visibility = 'hidden';
    frame.style.position = 'absolute';
    frame.style.display = 'none';
    frame.style.height = 0;
    frame.style.width = 0;
    frame.src = AUTH.check_session_iframe;
    frame.onload = (e) => {
        console.log('check session frame - onload');
        console.dir(e);
    };
    window.addEventListener('message', (e) => {
        const data = e.data || '';
        console.log(e);
        switch (data) {
            case 'changed':
                window.location.reload();
                break;
            case 'error':
                console.error(e);
                break;
            default:
                break;
        }
    });
    window.document.body.appendChild(frame);
    var checkSession = function () {
        frame.contentWindow.postMessage(AUTH.client_id + " " + state, new URL(AUTH.check_session_iframe).origin);
    };
    window.setInterval(checkSession, 3000);
};