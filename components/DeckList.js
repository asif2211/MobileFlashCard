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
import { white, red } from "../utils/color";
import DeckListView from "../components/DeckListView";
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
  

    alert(JSON.stringify(this.props.decklist));
    if (!this.state.ready) {
      return (
        <View>
          <Text>data is not found</Text>
        </View>
      );
    } else {
      // alert(this.props.navigation.getParam&&this.props.navigation.getParam('name'))
      return Object.values(this.props.decklist).length > 0 ? (
        <View>
          
          <FlatList
            data={Object.values(this.props.decklist)}
            renderItem={({ item }) => (
              <DeckListView
                id={item.id}
                name={item.name}
                navigation={()=>this.props.navigation.navigate('AddCard',{id:item.id})}
                countCard={item.card ? item.card.length : 0}
              />
            )}
            keyExtractor={(item, index) => item.name}
          />

        
        </View>
      ) : (
        <Text>Loading...</Text>
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
    alignItems: "center",
  },
});
