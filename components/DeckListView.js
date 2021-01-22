import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, gray } from "../utils/color";
const DeckListView = ({ id, name, navigation, countCard }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={navigation}>
      <Text key={id} style={styles.deckitle}>
        {name}
      </Text>

      <Text style={styles.card}>{`${
        countCard ? countCard.length : 0
      } Cards`}</Text>
    </TouchableOpacity>
  );
};

export default DeckListView;

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    margin: 20,
    justifyContent: "center",
    borderColor: white,
    borderWidth: 1,
    fontSize: 20,
    width: 350,
    backgroundColor: white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  deckitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    fontSize: 16,
    color: gray,
    textAlign: "center",
  },
});
