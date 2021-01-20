import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from './DeckList';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import { purple } from "../utils/color";

  
  const HomeStack = createStackNavigator();
export default () => (
  
    <NavigationContainer>
    <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={DeckList} options={{title:'Deck List Home'}} />
          <HomeStack.Screen name="AddDeck" component={AddDeck} options={{title:'Add Deck'}} />
          <HomeStack.Screen name="AddCard" component={AddCard} options={{title:'AddCard'}} />
        </HomeStack.Navigator>
  </NavigationContainer>
   
);
