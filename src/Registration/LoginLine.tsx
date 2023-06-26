import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import { RegistrationScreenProp} from "../types/navigationTypes";

const LoginLine = ({ navigation }: RegistrationScreenProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.newText}> Already have an account? </Text>
      <Pressable
        onPress={() => navigation.navigate("Intro")}
      >
        <Text style={styles.pressableText}>Go back</Text>
      </Pressable>
    </View>
  );
};

export default LoginLine;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  newText: {
    color: "darkgrey",
  },
  pressableText: {
    color: "black",
  },
});
