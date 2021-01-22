import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import CenterText from "./CenterText";
import { connect } from "react-redux";
import { gray,lightPurp } from "../utils/color";
import TextButton from "./TextButton";
import Heading from "./Heading";
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
class DeckListDetail extends Component {
  render() {
    const { route, navigation, decklist } = this.props;
    const card = decklist[route.params.deckId];
    
    return (
      <View style={styles.container}>
        <Heading>
          {/* {JSON.stringify(Object.values(decklist))} */}
          {route.params.name}
        </Heading>
        <View>
          <Text style={styles.card}>{`${card.cards&&card.cards.length} Cards`}</Text>
        </View>
        {card.cards&&card.cards.length !== 0 && (
          
            <View>
            <TextButton onPress={() =>
                navigation.navigate("QuezScreen", {
                  card:card
                })} title="Start Quez" style={{backgroundColor: lightPurp}}/>
            </View>
        ) }

        <View>
        <TextButton  onPress={() =>
              navigation.navigate("AddCard", {
                name: card.name,
                deckId: card.id,
              })
            } title="Add Card"/>
         
          </View>
      </View>
    );
  }
}

const mapStateToProps = (decklist) => {

  return {
    decklist,
  };
};

export default connect(mapStateToProps)(DeckListDetail);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    fontSize: 16,
    color: gray,
    textAlign: "center",
  },
  
});
