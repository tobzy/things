import * as React from 'react';
import {StyleSheet, View,Text} from "react-native";


export const Header = () => {
  return  <View>
    <Text style={styles.headerTitle}>THINGS</Text>
    <Text style={styles.headerSubTitle}>The App</Text>
  </View>;
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 35,
    color: 'white',
    fontWeight:'bold'
  },
  headerSubTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight:'bold'
  }
});
