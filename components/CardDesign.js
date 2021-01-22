import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native"
import TextButton from "./TextButton";
import Heading from "./Heading";


class CardDesign extends Component {
    constructor(props){
        super(props);
    }
   render()
   {
    const {cardinfo,displayQuestion,onPress} = this.props;
    const {question,answer} = cardinfo;
        return (
            <View
            style={styles.item}
            
          >
            <Text style={styles.deckitle}>
              {`${
                displayQuestion
                  ? question
                  : answer
              }`}
            </Text>
            <TextButton
              title="See Answer"
              onPress={onPress}
            />
          </View>
  
        )
    }
}
export default CardDesign;

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
       
      });
      