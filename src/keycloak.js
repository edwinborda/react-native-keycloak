import { RNKeycloak } from '@react-keycloak/native';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: 'https://zeus.yara.com/auth/',
  realm: 'cashapp',
  clientId: 'react-webapp',
});

export default keycloak;