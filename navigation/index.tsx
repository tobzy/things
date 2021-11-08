import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {AddModalScreen} from '../screens/AddModalScreen';
import {ThingsListScreen} from '../screens/ThingsListScreen';
import {ThingSelectionsScreen} from '../screens/ThingSelectionsScreen';
import { RootStackParamList } from '../types';


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ThingsList" component={ThingsListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ThingSelections" component={ThingSelectionsScreen} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={AddModalScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}