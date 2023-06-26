import { Pressable, StyleSheet, Text, View } from "react-native";
import TextBox from "../components/textBoxes";
import { Backgrounds, Containers } from "../styles/Containers";
import { Texts } from "../styles/text";
import LoginLine from "./LoginLine";
import { RegistrationScreenProp } from "../types/navigationTypes";
import { Auth } from "aws-amplify";
import { useState, Dispatch, SetStateAction } from "react";
import PhoneNumberBox from "../components/PhoneNumberInput";



const RegistrationPage = ({ navigation, route }: RegistrationScreenProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const data = { email, password, firstName, lastName, phoneNumber };

  return (
    <View style={{ ...Backgrounds.main, gap: 20 }}>
      <Text style={Texts.heading}> Register</Text>
      <TextBox type="fn" setText={setFirstName} currText={firstName} />
      <TextBox type="ln" setText={setLastName} currText={lastName} />
      <TextBox type="email" setText={setEmail} currText={email} />
      <TextBox type="pass" setText={setPassword} currText={password} />
      <PhoneNumberBox
        formattedPhoneNumber={phoneNumber}
        setFormattedPhoneNumber={setPhoneNumber}
      />
      {errorMsg && <Text> Error: {errorMsg} </Text>}
      <Pressable
        style={Containers.button}
        onPress={() => signUp(data, setErrorMsg, {navigation, route})}
      >
        <Text>Register</Text>
      </Pressable>
      <LoginLine navigation={navigation} route={route}></LoginLine>
    </View>
  );
};

async function signUp(
  data: registrationDataType,
  setErrorMessage: Dispatch<SetStateAction<string>>,
  { navigation, route }: RegistrationScreenProp
) {
  console.log(data);
  try {
    const { user } = await Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        email: data.email,
        name: data.firstName,
        family_name: data.lastName,
        phone_number: data.phoneNumber,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
    navigation.navigate("Verification", {username: user.getUsername()});

  } catch (error) {
    console.log("error signing up:", error);
    if (error instanceof Error) {
      setErrorMessage(error.message);
    }
  }
}

type registrationDataType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export default RegistrationPage;
