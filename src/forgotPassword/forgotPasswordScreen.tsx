import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import TextBox from "../components/textBoxes";
import { Backgrounds, Containers } from "../styles/Containers";
import { ForgotPasswordScreenProp } from "../types/navigationTypes";
import { Texts } from "../styles/text";
import { SmallTextButton } from "../components/buttons";

/* 
TODO:
implement functionality for reset password button. 
this may require new screens to type in the new password plus whatever code is sent?
*/

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProp) => {
  const [email, setEmail] = useState("");
  return (
    <View style={{ ...Backgrounds.main, gap: 20 }}>
      <Text style={Texts.heading}> Forgot Password?</Text>
      <View style={styles.inputContainer}>
        <TextBox type="email" currText={email} setText={setEmail} />
        <Pressable style={Containers.button}>
          <Text>Reset password</Text>
        </Pressable>
      </View>
      <SmallTextButton
        nonPressableText="Suddenly remember it?"
        pressableText="Go back."
        onPressFunction={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
