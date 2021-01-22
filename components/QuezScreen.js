import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { white, gray, lightPurp, purple, red, blue } from "../utils/color";
import TextButton from "./TextButton";
import Heading from "./Heading";
import CardDesign from "./CardDesign";

class QuezScreen extends Component {
  constructor() {
    super();
    this.state = {
      correctAns: 0,
      incorrectAns: 0,
      currentcardindex: 0,
      displayResult: false,
      displayQuestion: true,
    };
  }
 componentDidUpdate(userOption){
    let {correctAns,incorrectAns,currentcardindex,displayResult} = this.state;
    if (
      currentcardindex ===
      this.props.route.params.card.cards.length - 1
    ) {
      displayResult = true;
    } else {
      currentcardindex++;
    }

    if(userOption){
      correctAns++
    }
    else {
      incorrectAns++
    }
    this.setState(state=>({
      correctAns,
      incorrectAns,
      currentcardindex,
      displayResult
    }));
  };
  render() {
    const { correctAns, incorrectAns, currentcardindex,displayQuestion } = this.state;
    const remainingquez =
      this.props.route.params.card.cards.length -
      (correctAns + incorrectAns + 1);
    return (
      <View>
       <CardDesign cardinfo={this.props.route.params.card.cards[currentcardindex]} displayQuestion={displayQuestion} onPress={()=>this.props.navigation.navigate('AnswerScreen',{answer:this.props.route.params.card.cards[currentcardindex].answer})}/>
        <View>
          <Heading
            style={{
              fontSize: 20,
              color: purple,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {`Remaing Quez : ${remainingquez}`}
          </Heading>
        </View>
        <View style={styles.selectionBtn}>
          <View style={styles.correct}>
            <TextButton
              onPress={this.componentDidUpdate(true)}
              title="Correct"
              style={{ width: 150, height: 50, backgroundColor: blue }}
            />
          </View>
          <View style={styles.correct}>
            <TextButton
              onPress={this.componentDidUpdate(false)}
              style={{ width: 150, height: 50, backgroundColor: red }}
              title="Incorrect"
            />
          </View>
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
  selectionBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginVertical: 70,
  },
  correct: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
