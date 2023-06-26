import React from "react";
import { StyleSheet} from "react-native";
import Login from "./src/Login/Login";
import HomePage from "./src/homepage/HomePage";
import RegistrationPage from "./src/Registration/RegistrationPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types/navigationTypes";
import ForgotPasswordScreen from "./src/forgotPassword/forgotPasswordScreen";
import { Amplify } from "aws-amplify";
import IntroPage from "./src/Intro/IntroPage";
import awsExports from "./src/aws-exports.js";
import "react-native-gesture-handler";
import Verification from "./src/verification/Verification"
Amplify.configure(awsExports);

//USEFUL: RNFES
const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Intro"
      >
        <RootStack.Screen name="Verification" component={Verification}/>
        <RootStack.Screen name="Intro" component={IntroPage} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={HomePage} />
        <RootStack.Screen name="Registration" component={RegistrationPage} />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
