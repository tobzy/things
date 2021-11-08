import * as React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import {useThings} from '../context/ThingsContext';
import { RootStackScreenProps } from '../types';
import {ThingComponent} from "../components/ThingComponent";
import {Button} from "../components/Button";
import {FontAwesome5} from "@expo/vector-icons";
import {Header} from "../components/Header";

const backgroundSource = require('../assets/images/background-1.png')

export const ThingsListScreen = ({ navigation }: RootStackScreenProps<'ThingsList'>) =>{

  const {things, toggleSelections} = useThings();

  const navigateToSelectionsScreen = () => {
    if(things.some(thing => thing.selected)){
      navigation.navigate('ThingSelections')
    }
  }
  return (
    <ImageBackground style={styles.container} resizeMode="cover" source={backgroundSource}>

      <Header/>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Modal')}>
        <FontAwesome5 size={25} style={{ marginBottom: -3 }} color={'black'} name={'plus'} />
      </TouchableOpacity>


      <ScrollView style={styles.thingsWrapper}>
        {things.map((thing, index) => {
          return (
            <ThingComponent key={thing.id} thing={thing} backgroundColorIndex={index} onPress={toggleSelections}/>
          )
        })}

        {!things.length && <Text  style={styles.emptyStateText}>Add Things to Begin</Text>}
      </ScrollView>

     <View style={styles.buttonArea}>
       <Button buttonText={'Next'} onPress={navigateToSelectionsScreen}/>
     </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop:42
  },
  thingsWrapper: {
    maxHeight:525,
    marginTop:75
  },
  buttonArea: {
    position: 'absolute',
    bottom:40,
    right:40,
    alignItems: 'flex-end',
    width:'100%',
  },
  emptyStateText:{
    fontSize:20,
    alignSelf:'center',
    marginTop:40,
    color:'#666'
  },
  addButton:{
    position: 'absolute',
    top:100,
    alignItems: 'flex-end',
    right:40
  }
});
