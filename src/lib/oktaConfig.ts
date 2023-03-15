import { redirect } from "react-router-dom";

export const oktaConfig = {
    clientId: '0oa8q67wgbDGQVWTr5d7',
    issuer: 'https://dev-50692489.okta.com/default',
    redirectUrl: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
} 