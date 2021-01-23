import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { receiveDeckData } from "../utils/api";
import { receiveDeck } from "../action";
import { connect, Provider } from "react-redux";
import { white, red, gray } from "../utils/color";
import DeckListView from "./DeckListView";
import TextButton from "./TextButton";
import CenterText from "./CenterText";
import Heading from "./Heading";
class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    receiveDeckData()
      .then((decklist) => this.props.dispatch(receiveDeck(decklist)))
      .then(() => {
        this.setState({ ready: true });
      });
  }

  render() {
    // alert(JSON.stringify(Object.values(this.props.decklist)))
    if (!this.state.ready) {
      return (
        <View>
          <Text>data is not found</Text>
        </View>
      );
    } else {
      // alert(Object.values(this.props.decklist).length);
      return Object.values(this.props.decklist).length > 0 ? (
        <View style={styles.Maincontainer}>
          <FlatList
            data={Object.values(this.props.decklist)}
            renderItem={({ item }) => (
              <DeckListView
                id={item.id}
                name={item.name}
                navigation={() =>
                  this.props.navigation.navigate("DeckListDetail", {
                    deckId: item.id,
                    name: item.name,
                  })
                }
                countCard={item.cards}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      ) : (
        <Heading>Decks are empty yet! Pease Add Deck</Heading>
      );
    }
  }
}
const mapStateToProps = (decklist) => {
  return {
    decklist,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   receiveDeck: (decklist) => dispatch(receiveDeck(decklist)),
// });
export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
  },
});
