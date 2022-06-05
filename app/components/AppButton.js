import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AppButton({ title, style }) {
  return (
    <View style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    width: "85%",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
export default AppButton;
