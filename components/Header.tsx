import * as React from 'react';
import {StyleSheet, View,Text} from "react-native";


export const Header = () => {
  return  <View
    style={styles.wrapper}
  >
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
  },
  wrapper: {
    // backgroundColor:'white',
    // maxWidth:150,
    // width: '100%',
    // borderRadius:8,
    // height:60,
    // alignItems:"center",
    // justifyContent:'center'
  }
});
