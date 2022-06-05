import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import Screen from "../components/Screen";

function WelcomeScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.text}>Instagram</Text>
        <Image style={styles.image} source={require("../assets/dp.jpg")} />
        <Text style={styles.name}>iscyberlord</Text>
        <AppButton style={styles.button} title="Log in" />
        <Text style={styles.change}>Switch accounts</Text>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  button: {
    top: 65,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    height: "50%",
  },
  change: {
    color: "dodgerblue",
    fontSize: 18,
    fontFamily: "Roboto",
    top: 100,
  },
  image: {
    height: 120,
    top: 40,
    width: 120,
    borderRadius: 60,
  },
  name: {
    top: 50,
    fontSize: 18,
    fontWeight: "600",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: 30,
    fontWeight: "bold",
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default WelcomeScreen;
