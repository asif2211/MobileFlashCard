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
import TextButton from "../components/TextButton";
import { red } from "../utils/color";
import { useRoute } from "@react-navigation/native";

class AddCard extends Component {
  state = {
    question: "",
    asnwer: "",
    error: "",
  };

  handleSubmitBtn = () => {
    // if((this.state.question)  || (this.state.asnwer) ==="")
    // {
    //   this.setState({
    //     error:'please fill question and asnwer filed'
    //   })
    // }
    // else
    // {
    const {question,answer} = this.state;
    const {route} = this.props;
    const id = route.params.id;

    this.props.dispatch(createCard(id, question, answer));
    storeCard(id, { question, answer });
    this.setState({
      question: "",
      asnwer: "",
    });
    this.props.navigation.navigate("Home");
  };

  //for class  <View onPress={()=>this.props.navigation.navigate('DeckList')}>
  render() {
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.heading}>Add Question</Text>
        <TextInput
          style={styles.input}
          value={this.state.question}
          placeholder="Add question"
          onChangeText={(question) => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          value={this.state.answer}
          placeholder="Add answer"
          onChangeText={(answer) => this.setState({ answer })}
        />
        <Text style={styles.error}>{this.state.error}</Text>
        <TextButton onPress={this.handleSubmitBtn}>Add Deck</TextButton>
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
    paddingTop: 50,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    width: 300,
    height: 40,
    marginVertical: 20,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 20,
  },
  error: {
    textAlign: "center",
    fontSize: 20,
    color: red,
    margin: 10,
    padding: 10,
  },
});
