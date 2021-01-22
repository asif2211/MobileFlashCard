import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  StyleSheet,TouchableOpacity
} from "react-native";

import React, { Component } from "react";
import { connect } from "react-redux";
import { storeDeckData,receiveDeckData } from "../utils/api";
import { add_Deck } from "../action";
import {generateId} from '../utils/helper';
import TextButton from '../components/TextButton'
import { red } from "../utils/color";
import Heading from "./Heading";
class AddDeck extends Component {
  state = {
    input: "",
    error:''
  };
  deckData = () => ({
    id: generateId(),
    name: this.state.input,
    cards: []
  })
  handleInput = (input) => {
    this.setState(() => ({
      input
    }));
  };
  handleSubmitBtn = () => {
    if(this.state.input ==="")
    {
      this.setState({
        error:'please fill this filed'
      })
    }
    else
    {
      const deckvalue = this.deckData();
    
    const id = deckvalue.id;
    const name = deckvalue.name;
    this.props.dispatch(add_Deck(id,name));
    
    storeDeckData(deckvalue);
    this.setState({
      input:''
    })
    this.props.navigation.navigate("DeckListDetail", {
      deckId: deckvalue.id,
      name: deckvalue.name
    });
    }
    
  };
  //for class  <View onPress={()=>this.props.navigation.navigate('DeckList')}>
  render() {
   
    return (
      <KeyboardAvoidingView  style={styles.container}>
        <Heading>add Deck</Heading>
        <TextInput
          style={styles.input}
          value={this.state.input}
          placeholder="Add Quez"
          onChangeText={this.handleInput}
        />
        <Text style={styles.error}>{this.state.error}</Text>
        <TextButton title="Add Deck"  onPress={this.handleSubmitBtn}/>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddDeck);

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
    marginVertical: 10,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 20,
  },
  error:{
    textAlign: 'center',
    fontSize: 20,
    color:red,
    margin:5,
    padding:5,
  },
  
});