import React from 'react';
import { View, Text, Button } from 'react-native';
import { useKeycloak } from '@react-keycloak/native';
import Token from './token';
import styles from './styles';

const Login = () => {
  const { keycloak } = useKeycloak();

  return (
    <View style={styles.container}> 
      {keycloak?.authenticated ? 
       (
         <Token/>
       )
       :
       (
         <View style={styles.container}>
           <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText} >{'HI Stranger, Welcome to this amazing app, please press the login button'}</Text>
           </View>  
           <View style={styles.buttonContainer}>
              <Button onPress={() => keycloak?.login()} title="Login" />
           </View>
         </View>
       )
      }
    </View>
  );
};

export default Login;