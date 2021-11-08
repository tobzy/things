import * as React from 'react';
import {StyleSheet, TouchableOpacity,Text} from "react-native";

interface ButtonProps{
  buttonText:string;
  onPress: () => void;
}

export const Button = ({buttonText, onPress}: ButtonProps) => {
  return  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>;
}

export const GreyButton = ({buttonText, onPress}: ButtonProps) => {
  return  <TouchableOpacity
    style={styles.greyButton}
    onPress={onPress}
    accessibilityLabel={'Button'}
  >
    <Text style={styles.greyButtonText}>{buttonText}</Text>
  </TouchableOpacity>;
}


const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  greyButtonText: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor:'white',
    maxWidth:150,
    width: '100%',
    borderRadius:8,
    height:60,
    alignItems:"center",
    justifyContent:'center'
  },
  greyButton: {
    backgroundColor:'#888',
    width: '100%',
    borderRadius:8,
    height:60,
    alignItems:"center",
    justifyContent:'center'
  }
});
