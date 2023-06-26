import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenProp } from "../types/navigationTypes";

const NavBar = ({ navigation }: HomeScreenProp) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.square}
        onPress={() => navigation.navigate("Login")}
      >
        {/* TODO: make this repitition into a function */}
        <Text>TEMPORARY RETURN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.square}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.square}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.square}>
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.square}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#D9D9D9",
    height: "10%",
    verticalAlign: "center",
    alignItems: "center",
  },
  square: {},
});
