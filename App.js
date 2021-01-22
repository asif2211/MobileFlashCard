import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer'
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import Navigation from './components/Navigation'
import {LogBox } from "react-native";
 
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
    <Navigation/>
    </Provider>
  );
}
  