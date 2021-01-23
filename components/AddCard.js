import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import React, { Component } from "react";
import { connect } from "react-redux";
import { storeCard } from "../utils/api";
import { createCard } from "../action";
import TextButton from "./TextButton";
import { red, white } from "../utils/color";
import { useRoute } from "@react-navigation/native";
import CenterText from "./CenterText";
import Heading from "./Heading";

class AddCard extends Component {
  state = {
    question: "",
    asnwer: "",
    errorQ: "",
    errorA: "",
  };
  handleInputQuestion = (question) => {
    this.setState({
      question,
    });
  };
  handleInputAnswer = (answer) => {
    this.setState({
      answer,
    });
  };
  handleSubmitBtn = () => {
    const { question, answer } = this.state;
    const { route } = this.props;
    const deckId = route.params.deckId;

    this.props.dispatch(createCard(deckId, question, answer));
    storeCard(deckId, { question, answer });

    this.setState({
      question: "",
      asnwer: "",
    });
    this.props.navigation.navigate("DeckListDetail");
  };

  //for class  <View onPress={()=>this.props.navigation.navigate('DeckList')}>
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Heading>{this.props.route.params.name}</Heading>
        <Heading style={{ color: "#000", fontSize: 20, padding: 10 }}>
          Add Card
        </Heading>

        <TextInput
          style={styles.input}
          value={this.state.question}
          placeholder="Add question"
          onChangeText={this.handleInputQuestion}
        />
        <TextInput
          style={styles.input}
          value={this.state.answer}
          placeholder="Add answer"
          onChangeText={this.handleInputAnswer}
        />
        <TextButton
          onPress={this.handleSubmitBtn}
          disable={this.state.question === "" || this.state.answer === ""}
          title="Add Card"
        />
        <Text style={styles.error}>{this.state.errorQ}</Text>
        <Text style={styles.error}>{this.state.errorA}</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 40,
    marginVertical: 5,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    borderColor: white,
    borderWidth: 1,
    fontSize: 20,
    shadowColor: "#000",
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  error: {
    textAlign: "center",
    fontSize: 20,
    color: red,
    margin: 10,
    padding: 10,
  },
});
