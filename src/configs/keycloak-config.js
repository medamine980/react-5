import Keycloak from "keycloak-js"

const keycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'master',
    clientId: 'expressor'
}

const keycloak = new Keycloak(keycloakConfig);

export { keycloak }