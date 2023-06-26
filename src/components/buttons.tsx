import { StyleSheet, Text, View, Pressable } from "react-native";
import { Containers } from "../styles/Containers";

type buttonPropType = {
  displayText: string;
  onPressFunction: () => any;
};

function Button({ displayText, onPressFunction }: buttonPropType) {
  return (
    <Pressable style={Containers.button} onPress={onPressFunction}>
      <Text>{displayText}</Text>
    </Pressable>
  );
}

type smallButtonPropType = {
  nonPressableText: string;
  pressableText: string;
  onPressFunction: () => any;
};

function SmallTextButton({
  nonPressableText,
  pressableText,
  onPressFunction,
}: smallButtonPropType) {
  return (
    <View style={styles.container}>
      <Text style={styles.newText}> {nonPressableText + " "} </Text>
      <Pressable onPress={onPressFunction} style={styles.pressable}>
        <Text style={styles.pressableText}>{pressableText}</Text>
      </Pressable>
    </View>
  );
}

export { Button, SmallTextButton };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  newText: {
    color: "darkgrey",
  },
  pressable: {},
  pressableText: {
    color: "black",
  },
});
