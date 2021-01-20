import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';

const Stack = createStackNavigator();
const MainStackScreen = () => (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DeckList}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="AddDeck" component={AddDeck} options={{title:'Add Deck',
    }} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default () => (
  
      <MainStackScreen />
   
);
