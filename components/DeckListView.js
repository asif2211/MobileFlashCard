import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, gray } from "../utils/color";
const DeckListView = ({ id, name, navigation, countCard }) => {
  if (name !== "") {
    return (
      <TouchableOpacity style={styles.item} onPress={navigation}>
        <Text key={id} style={styles.deckitle}>
          {name}
        </Text>
        <View>
          <Text style={styles.card}>{`${countCard} Cards`}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>Data not found</Text>
      </TouchableOpacity>
    );
  }
};

export default DeckListView;

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
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
