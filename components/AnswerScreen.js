import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, gray, purple } from "../utils/color";
import TextButton from "./TextButton";
import Heading from "./Heading";

export default class AnswerScreen extends Component {
  render() {
    const { navigation, route } = this.props;
    return (
      <View style={styles.container}>
        <Heading style={{ fontSize: 20, color: purple }}>
          {route.params.answer}
        </Heading>
        <TextButton
          onPress={() => navigation.navigate("QuezScreen")}
          title="Back To Quez"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
