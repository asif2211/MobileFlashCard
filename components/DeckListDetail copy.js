import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CenterText from "./CenterText";
import { connect } from "react-redux";
import { gray } from "../utils/color";
import TextButton from "./TextButton";

class DeckListDetail extends Component {
  render() {
    const { route, navigation, decklist } = this.props;
    const card = decklist[route.params.deckId];
    
    return (
      <View style={styles.container}>
        <CenterText>
          {/* {JSON.stringify(Object.values(decklist))} */}
          {route.params.name}
        </CenterText>
        <View>
          <Text style={styles.card}>{`${card.cards.length} Cards`}</Text>
        </View>
        {card.cards.length !== 0 && (
        <View style={{marginVertical:10}}>
          <TextButton
            onPress={() =>
              navigation.navigate("QuezScreen", {
                card:card
              })
            }
          >
            Start Quez
          </TextButton>
          </View>
        ) }
        <View style={{marginVertical:10}}>
          <TextButton
            onPress={() =>
              navigation.navigate("AddCard", {
                name: card.name,
                deckId: card.id,
              })
            }
          >
            Add Card
          </TextButton>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    fontSize: 16,
    color: gray,
    textAlign: "center",
  },
});
