import PhoneInput from "react-native-phone-number-input";
import { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dispatch, SetStateAction } from "react";

const phoneNumberInput = (props: {
  formattedPhoneNumber: string;
  setFormattedPhoneNumber: Dispatch<SetStateAction<string>>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        placeholder={"Phone Number"}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => props.setFormattedPhoneNumber(text)}
        containerStyle={styles.flagContainer}
        textContainerStyle={styles.textContainer}
      />
    </View>
  );
};

export default phoneNumberInput;

const styles = StyleSheet.create({
  flagContainer: {
    height: 50,
    backgroundColor: "darkgrey",
    borderRadius: 25,
    width: "80%",
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: "#D9D9D9",
    height: 44,
  },
});
