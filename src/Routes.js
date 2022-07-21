import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  InitialScreen from './screens/InitialScreen'
import PlayChallenges from './screens/PlayChallenges';
import AddDare from './screens/AddDare';
import AddTruth from './screens/AddTruth';
import PlayTruth from './screens/PlayTruth';
import CreateAndSetPlayers from './screens/CreateAndSetPlayers';
import Settings from './screens/Settings';
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
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    )
}

export default Routes