import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '@react-keycloak/native';
import styles from './styles';

const Token = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <View>
        <Text style={styles.tokenText}>{`Your token = "${keycloak?.token}"!`}</Text>
          {!!keycloak.authenticated && (
              <View style ={{marginTop:10}}>
             <Button onPress={() => keycloak?.logout()} title="Logout" />
             </View>
         )}
   </View>
  );
};

export default Token;