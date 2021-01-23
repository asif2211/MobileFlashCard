import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import AddCard from "./AddCard";
import DeckListDetail from "./DeckListDetail";
import AnswerScreen from "./AnswerScreen";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { purple, lightPurp, blue } from "../utils/color";
import QuezScreen from "./QuezScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: blue },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={DeckList}
        options={{ title: "Deck List", headerTitleAlign: "center" }}
      />
      <HomeStack.Screen
        name="Details"
        component={DeckListDetail}
        options={{ title: "Deck Details", headerTitleAlign: "center" }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: lightPurp },
      }}
    >
      <SettingsStack.Screen
        name="AddDeck"
        component={AddDeck}
        options={{ title: "Add Deck", headerTitleAlign: "center" }}
      />
      <SettingsStack.Screen
        name="DeckListDetail"
        component={DeckListDetail}
        options={{ title: "Deck Details", headerTitleAlign: "center" }}
      />
      <SettingsStack.Screen
        name="AddCard"
        component={AddCard}
        options={{ title: "Add Card", headerTitleAlign: "center" }}
      />
      <SettingsStack.Screen
        name="QuezScreen"
        component={QuezScreen}
        options={{ title: "Quez Screen", headerTitleAlign: "center" }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#FFF",
          activeBackgroundColor: purple,
          fontSize: 20,
          labelStyle: {
            fontSize: 20,
          },
          style: {
            textAlign: "center",
            marginBotton: 20,
            lineHeight: 30,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          tabBarOptions={{
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: "blue",
            },
          }}
        />
        <Tab.Screen name="AddDeck" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
