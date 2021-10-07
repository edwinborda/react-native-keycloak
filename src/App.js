import * as React from 'react';
import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import Login from './login';
import keycloak from './keycloak';

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'amazingproject://Homepage' }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}