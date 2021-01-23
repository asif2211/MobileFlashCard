import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { white, purple, gray } from "../utils/color";

export default function CenterText({ onPress, children }) {
  return (
    <View style={styles.androidBtn}>
      <Text style={styles.submitBtnText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  androidBtn: {
    marginVertical: 20,
    fontSize: 22,
    borderRadius: 2,
    padding: 7,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    color: gray,
    fontSize: 30,
    textAlign: "center",
  },
});
