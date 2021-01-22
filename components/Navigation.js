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
import { purple } from "../utils/color";
import QuezScreen from "./QuezScreen";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={DeckList} />
      <HomeStack.Screen name="Details" component={DeckListDetail} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="AddDeck" component={AddDeck} />
      <SettingsStack.Screen name="DeckListDetail" component={DeckListDetail} />
      <SettingsStack.Screen name="AddCard" component={AddCard} />
      <SettingsStack.Screen name="QuezScreen" component={QuezScreen} />
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
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
