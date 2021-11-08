import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {AddOrEditModalScreen} from '../screens/AddOrEditModalScreen';
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
        <Stack.Screen name="Modal" component={AddOrEditModalScreen} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}