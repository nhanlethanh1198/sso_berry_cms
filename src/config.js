const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URL, NODE_ENV } = process.env;

const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/dashboard/default',
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,
    // SSO OIDC
    oidc: {
        onSignIn: async (user) => {
            console.log('onSignIn');
            console.table(user);
            window.location.hash = '';
        },
        authority: 'https://localhost:9443',
        clientId: REACT_APP_CLIENT_ID,
        responseType: 'id_token',
        redirectUri: NODE_ENV === 'development' ? 'http://localhost:3000/' : `${REACT_APP_REDIRECT_URL}`
    }
};

export default config;
