import React from "react";
import { View, TouchableOpacity,Text,StyleSheet } from "react-native";
import { white ,purple} from "../utils/color";

export default function TextButton({ onPress, children }) {
  return (
    <View  style={styles.androidBtn}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.submitBtnText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
  androidBtn:{
    color:white,
    fontSize:22,
    borderRadius:2, 
    padding:7,
    height: 45,
    backgroundColor:purple,
    
  },
  submitBtnText:{
    color:white,
    fontSize:22,
    textAlign:'center'

  },
});
