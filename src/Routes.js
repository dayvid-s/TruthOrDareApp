import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  InitialScreen from './components/InitialScreen'
import PlayChallenges from './components/PlayChallenges';
import AddDare from './components/AddDare';
import AddTruth from './components/AddTruth';
import PlayTruth from './components/PlayTruth';
import CustomList from './components/CustomList';
import CreateAndSetPlayers from './components/CreateAndSetPlayers';
const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator initialRouteName='CreateAndSetPlayers'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='CreateAndSetPlayers' component={CreateAndSetPlayers} />
        <Stack.Screen name='InitialScreen' component={InitialScreen} />
        <Stack.Screen name='PlayChallenges' component={PlayChallenges}  />    
        <Stack.Screen name='AddTruth' component={AddTruth} />
        <Stack.Screen name='AddDare' component={AddDare}  />
        <Stack.Screen name='PlayTruth' component={PlayTruth} />
        <Stack.Screen name='CustomList' component={CustomList} />
      </Stack.Navigator>
    )
}

export default Routes