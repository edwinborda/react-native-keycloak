import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0
  },
  welcomeContainer:{
    flex:1,
    alignItems:'center',
    marginTop:60
  },
  welcomeText:{
    fontSize: 20,
    textAlign: 'center' ,
    color: "#939291"
   },
   tokenText:{
    fontSize: 8,
    color: "#939291"
   }
});

export default styles;