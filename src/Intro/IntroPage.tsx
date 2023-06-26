import { Pressable, StyleSheet, Text, View } from "react-native";
import { Texts } from "../styles/text";
import { FunctionComponent } from "react";
import { Backgrounds, Containers } from "../styles/Containers";
import { IntroScreenProp } from "../types/navigationTypes";

const IntroPage: FunctionComponent<IntroScreenProp> = ({ navigation }) => {
  return (
    <>
      <View style={{ ...Backgrounds.main}}>
        <Text> Welcome to</Text>
        <Text style={{ ...Texts.heading, fontSize: 60 }}>Collab</Text>
        <View style={styles.buttonContainer}>
        <Pressable
          style={{ ...styles.buttons, backgroundColor: "#FFFFFF" }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
        </Pressable>
        <Pressable
          style={styles.buttons}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={{ color: "#FFFFFF" }}>Register</Text>
        </Pressable>
      </View>
      </View>
      
    </>
    
  );
};

export default IntroPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
    bottom: "10%",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 60,
    borderRadius: 25,
    paddingHorizontal: 0,
    backgroundColor: "#000000",
  },
});
