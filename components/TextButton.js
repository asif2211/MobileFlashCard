import React, { Children } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { white, purple, orange, lightPurp } from "../utils/color";

export default function TextButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    
    borderRadius: 5,
    backgroundColor: purple,
    margin: 10,
    padding: 10,
    width: 300,
    justifyContent:'center',
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    
  }
});
