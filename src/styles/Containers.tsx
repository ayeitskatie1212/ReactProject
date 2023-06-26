import { StyleSheet } from "react-native";

const Backgrounds = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 150,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#887676",
  },
});

const Containers = StyleSheet.create({
  InputContainers: {
    width: "90%",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    backgroundColor: "#D9D9D9"
  },
});
export { Backgrounds, Containers };
