import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, gray } from "../utils/color";
import TextButton from "./TextButton";


export default class AnswerScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.deckitle} >
                <TextButton onPress={()=>navigation.navigate('QuezScreen')}>
                    Back To Quez
                </TextButton>
            </View>
        )
    }
}

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
    Quez:{
        backgroundColor:gray,
        color:white,
        borderRadius:5,
        borderWidth:1,
        padding:10,
        margin:10,
        fontWeight:'bold',
        fontSize: 20,
        
  
  
    }
  });
  