import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from './DeckList';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import DeckListDetail from './DeckListDetail';
import AnswerScreen from './AnswerScreen';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import { purple } from "../utils/color";
import QuezScreen from "./QuezScreen";

  
  const HomeStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
export default () => (
  
    <NavigationContainer>
    <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={DeckList} options={{title:'Deck List'}} />
          <HomeStack.Screen name="AddDeck" component={AddDeck} options={{title:'Add Deck'}} />
          <HomeStack.Screen name="AddCard" component={AddCard} options={{title:'AddCard'}} />
          <HomeStack.Screen name="DeckListDetail" component={DeckListDetail} options={{title:'Deck Details'}} />
          <HomeStack.Screen name="QuezScreen" component={QuezScreen} options={{title:'Quez Screen'}} />
          <HomeStack.Screen name="AnswerScreen" component={AnswerScreen} options={{title:'Answer Screen'}} />
       
        </HomeStack.Navigator>
       
  </NavigationContainer>
   
);
