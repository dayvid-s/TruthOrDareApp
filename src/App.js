import React from 'react';

import {NavigationContainer} from "@react-navigation/native"
import Routes from "./Routes"
import Provider from './context/Provider';


export default function App (){  
  return(
    <Provider>
      <NavigationContainer >
          <Routes/>
      </NavigationContainer>
    </Provider>
    )}

