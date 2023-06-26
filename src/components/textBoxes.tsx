import { useState, Dispatch, SetStateAction, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";

function TextBox(props: {
  type: string;
  currText: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  let data = determineType(props.type);
  let defaultText = data[0];
  let reactType = data[1];
  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => 
        props.setText(text)}
      value={props.currText}
      placeholder={defaultText}
      autoComplete={reactType}
    />
  );
}

export default TextBox;

enum autoCompleteVals {
  "birthdate-day",
  "birthdate-full",
  "birthdate-month",
  "birthdate-year",
  "cc-csc",
  "cc-exp",
  "cc-exp-day",
  "cc-exp-month",
  "cc-exp-year",
  "cc-number",
  "email",
  "gender",
  "name",
  "name-family",
  "name-given",
  "name-middle",
  "name-middle-initial",
  "name-prefix",
  "name-suffix",
  "password",
  "password-new",
  "postal-address",
  "postal-address-country",
  "postal-address-extended",
  "postal-address-extended-postal-code",
  "postal-address-locality",
  "postal-address-region",
  "postal-code",
  "street-address",
  "sms-otp",
  "tel",
  "tel-country-code",
  "tel-national",
  "tel-device",
  "username",
  "username-new",
  "off",
}
type autoCompleteTypes = keyof typeof autoCompleteVals;

//Note: this could also process whether or not it is protected? like a passwords
function determineType(type: string): [string, autoCompleteTypes] {
  let defaultText = ""; //What will be displayed in the text input
  let reactType: autoCompleteTypes = "off"; //What the name of the type is in react's TextInputs
  let maxLength = 1000;
  let minLength = 1;
  if (type == "email" || type == "Email") {
    defaultText = "Email";
    reactType = "email";
  } else if (
    type == "Password" ||
    type == "Pass" ||
    type == "password" ||
    type == "pass"
  ) {
    defaultText = "Password";
    reactType = "password";
    maxLength = 30;
  } else if (
    type == "First Name" ||
    type == "First" ||
    type == "first" ||
    type == "first name" ||
    type == "fn" ||
    type == "FN"
  ) {
    defaultText = "First Name";
    reactType = "name";
  } else if (
    type == "Last Name" ||
    type == "Last" ||
    type == "last" ||
    type == "last name" ||
    type == "ln" ||
    type == "LN"
  ) {
    defaultText = "Last Name";
    reactType = "name-family";
  } else if (type == "phone" || type == "phoneNumber") {
    defaultText = "Phone Number";
    reactType = "tel";
  }
  return [defaultText, reactType];
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    backgroundColor: "#D9D9D9",
  },
});
