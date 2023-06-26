import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import { HomeScreenProp } from "../types/navigationTypes";

const HomePage = ({ navigation, route }: HomeScreenProp) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} route={route} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#887676",
    height: "100%",
    width: "100%",
  },
});
