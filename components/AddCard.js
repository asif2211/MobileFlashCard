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
import CenterText from "./CenterText";
import Heading from "./Heading";

class AddCard extends Component {
  state = {
    question: "",
    asnwer: "",
    errorQ: "",
    errorA :""
  };
  handleInputQuestion = (question) => {
    this.setState(() => ({
      question
    }));
  };
  handleInputAnswer = (answer) => {
    this.setState(() => ({
      answer
    }));
  };
  handleSubmitBtn = () => {
    if(this.state.question ==="")
    {
      this.setState({
        errorQ:'please fill All fileds'
      })
    }
   
    else
    {
    const {question,answer} = this.state;
    const {route} = this.props;
    const deckId = route.params.deckId;

    this.props.dispatch(createCard(deckId, question, answer));
    storeCard(deckId, { question, answer });

    this.setState({
      question: "",
      asnwer: "",
      
    });
    this.props.navigation.navigate("DeckListDetail");
  };

  }

  //for class  <View onPress={()=>this.props.navigation.navigate('DeckList')}>
  render() {
    if(!this.state.question && this.state.asnwer)
    {
      return(
      this.setState({
        error:'Please Fill All Fileds'
      })
      )
    }
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Heading>
          {this.props.route.params.name}
        </Heading>
        <Heading>
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
        <TextButton onPress={this.handleSubmitBtn} title="Add Deck"/>
        <Text style={styles.error}>{this.state.errorQ}</Text>
        <Text style={styles.error}>{this.state.errorA}</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);

const styles = StyleSheet.create({
  container: {
    flex:1,
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
