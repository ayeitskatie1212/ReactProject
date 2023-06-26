import { StyleSheet, Text, View} from "react-native";
import { useState } from "react";
import TextBox from "../components/textBoxes";
import { Texts } from "../styles/text";
import { Backgrounds, Containers } from "../styles/Containers";
import { LoginScreenProp } from "../types/navigationTypes";
import {Button, SmallTextButton} from "../components/buttons";
import { Auth } from "aws-amplify";

const Login = ({ navigation, route }: LoginScreenProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{...Backgrounds.main, justifyContent: "space-between"}}>
      <Text style={Texts.heading}>Login</Text>
      <View style={Containers.InputContainers}>
        <TextBox type="email" currText={email} setText={setEmail}/>
        <TextBox type="pass" currText={password} setText={setPassword}/>
        <Button displayText={'Login'} onPressFunction={()=>login(email, password, {navigation, route})}/>
      </View>
      <SmallTextButton nonPressableText="Forgot Password?" pressableText="Click here." onPressFunction={()=> navigation.navigate("ForgotPassword")}/>
      <SmallTextButton nonPressableText="Don't have an account?" pressableText="Go back." onPressFunction={()=> navigation.navigate("Intro")}/>
    </View>
  );
};

async function login(email: string, password: string, {navigation, route}: LoginScreenProp ){
  try {
    const user = await Auth.signIn(email, password);

    console.log("signin successful")
  } catch (error) {
    if (error instanceof Error && error.name === "UserNotConfirmedException"){ //account has been made with that email, but it was never confirmed
      navigation.navigate("Verification", {username: email} )
      try {
        await Auth.resendSignUp(email);
        console.log('code resent successfully');
      } catch (err) {
        console.log('error resending code: ', err);
      }
    }
    console.log('error signing in', error);
  }
  
}

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    alignItems: "center",
    flexDirection: "column",
  },
});
