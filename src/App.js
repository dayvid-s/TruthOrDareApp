import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  InitialPart from './components/InitialPart'
import Truth from './components/Truth';
import AddTruth from './components/AddTruth';

const Stack = createNativeStackNavigator();

export default function (){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InitialPart'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='InitialPart' component={InitialPart} />
        <Stack.Screen name='Truth' component={Truth}  />    
        <Stack.Screen name='AddTruth' component={AddTruth} />
      </Stack.Navigator>
        
    </NavigationContainer>
    )}

