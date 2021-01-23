import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { white, gray, lightPurp, purple, red, blue } from "../utils/color";
import TextButton from "./TextButton";
import Heading from "./Heading";

import { clearLocalNotification,setLocalNotifications } from "../utils/helper";

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
  toggleQuestion = () => {
    this.setState((state) => ({
      displayQuestion: !state.displayQuestion,
    }));
  };
  getOptions = (userOption) => {
    let {
      correctAns,
      incorrectAns,
      currentcardindex,
      displayResult,
    } = this.state;

    alert(userOption);
    if (userOption) {
      correctAns++;
    } else {
      incorrectAns++;
    }
    // compare index then update results state
    if (currentcardindex === this.props.route.params.card.cards.length-1) {
      displayResult = true;
      
      clearLocalNotification()
      setLocalNotifications();
     
    } else {
      currentcardindex++;
    }
    this.setState((state) => ({
      correctAns,
      incorrectAns,
      currentcardindex,
      displayResult,
    }));
  };
  restartQuez=()=>{
    this.setState({
      correctAns: 0,
      incorrectAns: 0,
      currentcardindex: 0,
      displayResult: false,
      displayQuestion: true,
    })
  }
  render() {
    const {
      correctAns,
      incorrectAns,
      currentcardindex,
      displayQuestion,
      displayResult
    } = this.state;
    const remainingquez =
      (this.props.route.params.card.cards.length) -
      ((correctAns + incorrectAns) + 1);
    

    return !displayResult ?  (
      <View>
        <View style={styles.item}>
          <Text style={styles.deckitle}>
            {`${
              displayQuestion
                ? this.props.route.params.card&&this.props.route.params.card.cards[currentcardindex].question
                : this.props.route.params.card&&this.props.route.params.card.cards[currentcardindex].answer
            }`}
          </Text>
          <TextButton title={displayQuestion? "See Answer":"See Question"} onPress={this.toggleQuestion} />
        </View>
        <View>
          <Heading
            style={{
              fontSize: 20,
              color: purple,
              alignItems: "center",
              justifyContent: "center",
              marginBottom:20
            }}
          >
            {`Remaing Quez : ${remainingquez}`}
          </Heading>
        </View>
        <View>
          <Heading style={{fontSize: 16,color:'#000'}}>What are you thinking about this Question?</Heading>
        </View>
        <View style={styles.selectionBtn}>
          <View style={styles.correct}>
            <TextButton
              onPress={() => this.getOptions(true)}
              title="Correct"
              style={{ width: 150, height: 50, backgroundColor: blue }}
            />
          </View>
          <View style={styles.correct}>
            <TextButton
              onPress={() => this.getOptions(false)}
              style={{ width: 150, height: 50, backgroundColor: red }}
              title="Incorrect"
            />
          </View>
        
        </View>
      </View>
    ):<View style={styles.item}>
      <Heading>
        Result
      </Heading>
      <Heading>
        {`${Math.round((correctAns*100)/(correctAns+incorrectAns))}%`}
      </Heading>
      <TextButton title="Restart Quez" onPress={this.restartQuez}/>
    </View>;
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
