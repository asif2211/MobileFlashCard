import React from "react";
import { View, TouchableOpacity,Text,StyleSheet } from "react-native";
import { white ,purple, gray} from "../utils/color";

export default function Heading({ onPress, children }) {
  return (
    <View>
      
        <Text style={styles.submitBtnText}>{children}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
  submitBtnText:{
    fontWeight: 'bold',
    color:purple,
    fontSize:30,
    textAlign:'center',
    textTransform:'uppercase',

  },
});
