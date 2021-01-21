const SITE_SETTINGS = {
    API_BASE: 'https://localhost:5000',
    DEBUG: true,
    AUTH: {
        client_id: "Architecture-Sample-SPA",
        redirect_uri: "http://localhost:8085/callback",
        authorization_endpoint: "https://identity-dev.solera.dev/connect/authorize",
        token_endpoint: "https://identity-dev.solera.dev/connect/token",
        check_session_iframe: "https://identity-dev.solera.dev/connect/checksession",
        end_session_endpoint: "https://identity-dev.solera.dev/connect/endsession",
        requested_scopes: "openid profile",
        acr_values:"idp:SoleraAzureAD tenant:Default",
        post_logout_redirect_uri: 'http://localhost:8085'
    }
};