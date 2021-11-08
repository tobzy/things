import React from 'react';
import {StyleSheet, ImageBackground, View,Text, ScrollView} from 'react-native';
import {useThings} from '../context/ThingsContext';
import { RootStackScreenProps } from '../types';
import {ThingComponent} from "../components/ThingComponent";
import {Button} from "../components/Button";
import {Header} from "../components/Header";

const backgroundSource = require('../assets/images/background-2.png')

export const ThingSelectionsScreen = ({ navigation }: RootStackScreenProps<'ThingSelections'>) =>{
  const { things } = useThings();
  const selectedThings = things.filter(thing => thing.selected);
  const randomThingIndex = Math.floor(Math.random() * selectedThings.length);
  const randomThing = selectedThings[randomThingIndex];



  return (
    <ImageBackground style={styles.container} resizeMode="cover" source={backgroundSource}>
      <Header/>

      <ScrollView style={styles.thingsWrapper}>
        <View style={{flexDirection:'row'}}>
          <View style={styles.thingsSelection}>
            {things.filter(thing => thing.selected).filter(thing => thing.id !== randomThing?.id).map((thing, index) => {
              return (
                <ThingComponent key={thing.id} thing={thing} backgroundColorIndex={index} hideCheckMark/>
              )
            })}
          </View>
          { Boolean(randomThing) && (
            <View style={styles.chosenThing}>
              <Text style={styles.chosenThingTitle}>Chosen Thing:</Text>
              <Text style={styles.chosenThingText}>{randomThing?.description}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonArea}>
        <Button buttonText={'Back'} onPress={() => navigation.navigate('ThingsList')}/>
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
    alignItems: 'flex-start',
    width:'100%',
    left:40,
  },
  thingsSelection:{
    flex: 1
  },
  chosenThing:{
    backgroundColor:'#666666',
    height:209,
    borderRadius:8,
    alignItems:'center',
    flex:1,
    paddingTop:23,
    paddingBottom:65,
    marginLeft:15,
    justifyContent:'space-between'
  },
  chosenThingText: {
    fontSize: 30,
    color: 'white',
  },
  chosenThingTitle: {
    fontSize: 16,
    color: 'white',
  },
});
