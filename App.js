import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/signin/signin.tsx';
import HomePage from './src/homepage/HomePage'
import RegistrationPage from './src/Registration/RegistrationPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from './src/styles/RootStackParams'
import ForgotPasswordScreen from './src/forgotPassword/forgotPasswordScreen'

//USEFUL: RNFES

export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
