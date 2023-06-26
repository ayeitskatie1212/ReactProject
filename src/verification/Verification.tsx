import { Text, View, Pressable } from "react-native";
import { VerificationScreenProp } from "../types/navigationTypes";
import { Backgrounds } from "../styles/Containers";
import { Texts } from "../styles/text";
import { useState } from "react";
import TextBox from "../components/textBoxes";
import {Button} from "../components/buttons";
import { resendVerificationCode, checkVerification } from "../Utils/authFunctions";

//Verification takes in the EMAIL as the route params
const Verification = ({ navigation, route }: VerificationScreenProp) => {
  const [verificationCode, setVerificationCode] = useState("");
  return (
    <View style={Backgrounds.main}>
      <Text style={Texts.heading}> Verification</Text>
      <TextBox
        type="verificationCode"
        setText={setVerificationCode}
        currText={verificationCode}
      />
      <Button
        displayText="Submit Code"
        onPressFunction={() =>
          checkVerification(verificationCode, { route, navigation })
        }
      />
      <Text> Didn't recieve a code?</Text>
      <Pressable onPress={() => resendVerificationCode(route.params.username)}>
        <Text>Try again</Text>
      </Pressable>
    </View>
  );
};

export default Verification;
