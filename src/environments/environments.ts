import { default as data } from '../../auth_config.json'

export const environment = {
  production: false,
  auth: {
    domain: data["domain"],
    clientId: data["clientId"],
    redirectUri: window.location.origin,
    audience: "springbootjwts"
  },
  dev: {
    url: data['serverUrl']
  }
};
