import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { white, gray, lightPurp } from "../utils/color";
import TextButton from "./TextButton";

class QuezScreen extends Component {
  render() {
    return (
      <View>
        <View
          style={styles.item}
          onPress={() =>
            this.props.navigation.navigate("AnswerScreen", {
              answer: route.params.card.cards[0].answer,
            })
          }
        >
          <Text style={styles.deckitle}>
            {`${this.props.route.params.card.cards[0].question}?`}
          </Text>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AnswerScreen")}
            >
              <Text style={styles.submitBtnText}>Correct Answer</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              color: gray,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {`Total Questions : ${this.props.route.params.card.cards.length}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default QuezScreen;

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
    padding: 20,
    margin: 20,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 20,
  },
  deckitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    fontSize: 16,
    color: gray,
    textAlign: "center",
  },
  Quez: {
    backgroundColor: gray,
    color: white,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  button:{
    marginVertical: 20,
    padding: 20,
    margin:20,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 20,
    backgroundColor:'#f8f8ff',
  }
});
