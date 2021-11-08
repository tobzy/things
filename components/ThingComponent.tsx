import React from 'react';
import {Thing}  from '../lib/constants';
import {StyleSheet, TouchableOpacity, View,Text, Animated, I18nManager} from "react-native";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {incrementHexColor} from "../lib/utils";
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import {useThings} from "../context/ThingsContext";

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

interface ThingComponentProps{
  thing:Thing;
  onPress?: (thing:Thing) => void;
  backgroundColorIndex:number;
  hideCheckMark?:boolean
}

const baseBackgroundColor = '#666666';
const hexColorIncrement = 111111;

export const ThingComponent = ({thing, onPress, backgroundColorIndex, hideCheckMark = false}: ThingComponentProps) => {
  if(backgroundColorIndex >= 4) backgroundColorIndex = 4; // Ensure that the hex value stays below or equal to #aaaaaa
  const backgroundColor = incrementHexColor(baseBackgroundColor, hexColorIncrement * backgroundColorIndex);

  const {deleteThing} = useThings();

  const renderRightActions = () => {
    return (
      <RectButton style={[styles.rightAction,]} onPress={() => deleteThing(thing)}>
        <AnimatedIcon
          name="delete"
          size={30}
          color="#fff"
          style={[styles.actionIcon]}
        />
      </RectButton>
    );
  };



  return  (
    <>
      <Swipeable
        key={thing.id}
        onSwipeableRightOpen={() => deleteThing(thing)}
        renderRightActions={renderRightActions}>
        <TouchableOpacity
          activeOpacity={0.7}
          key={thing.id}
          style={[styles.thingItem, {backgroundColor}]}
          onPress={() => onPress && onPress(thing)}
        >
          <Text style={styles.thingText}>{thing.description}</Text>
          {thing.selected && !hideCheckMark && ( <View style={styles.checkBox}>
            <FontAwesome5 size={16} style={{ marginBottom: -3 }} color={'black'} name={'check'} />
          </View>)}

        </TouchableOpacity>
      </Swipeable>


    </>
  );
}

const styles = StyleSheet.create({
  thingText: {
    fontSize: 20,
    color: 'white',
  },
  thingItem: {
    marginBottom: 15,
    width: '100%',
    borderRadius:8,
    justifyContent:'center',
    height:60,
    alignItems:"center"
  },
  checkBox:{
    backgroundColor:'#D8D8D8',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    position:'absolute',
    right:16,
    top:15,
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: '#ee3c0f',
    height:60,
    // width:100,
    flex:1,
    borderRadius:8,
    justifyContent: 'flex-end'
  }
});
