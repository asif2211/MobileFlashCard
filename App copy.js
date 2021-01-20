import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer'
export default function App() {
  return (
    <Provider store={createStore(reducer)}>
    <View style={{flex:1,backgroundColor:'#ccc'}}>
      <DeckList/>
      <StatusBar />
    </View>
    </Provider>

  );
}


