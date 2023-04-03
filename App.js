import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/signin/signin.tsx';
import HomePage from './src/homepage/HomePage'
import RegistrationPage from './src/Registration/RegistrationPage'
//USEFUL: RNFES
//<HomePage />
//<SignIn/>
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationPage/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
