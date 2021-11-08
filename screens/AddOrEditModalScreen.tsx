import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Platform, StyleSheet, TextInput, TouchableOpacity,Text, View } from 'react-native';
import {useState} from "react";
import {FontAwesome} from "@expo/vector-icons";
import {RootStackScreenProps} from "../types";
import {GreyButton} from "../components/Button";
import {useThings} from "../context/ThingsContext";

export const AddOrEditModalScreen = ({navigation}:RootStackScreenProps<'ThingsList'>) => {
  const [thingText, setThingText] = useState<string>('');
  const {addNewThing} = useThings();

  const addOrEdit = () => {
    addNewThing(thingText);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Thing</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <FontAwesome size={25} style={{ marginBottom: -3 }} color={'black'} name={'close'} />
      </TouchableOpacity>

      <TextInput
        style={styles.formControl}
        underlineColorAndroid="transparent"
        placeholder={'Maximum length: 15 characters'}
        value={thingText}
        onChangeText={setThingText}
        maxLength={15}
      />
      {Boolean(thingText) && <GreyButton buttonText={'Add'} onPress={addOrEdit}/>}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:40,
    paddingTop:60
  },
  closeButton:{
    position: 'absolute',
    top:40,
    alignItems: 'flex-end',
    right:40
  },
  formControl:{
    width:'100%',
    minHeight:60,
    padding:12,
    fontSize:16,
    borderWidth:1,
    borderColor:'#888',
    borderRadius:8,
    marginBottom:20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
