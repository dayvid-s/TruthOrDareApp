import React,{useState, createContext, useContext} from 'react';
import dataOfInitialChallenges from '../src/components/dataOfInitialChallenges';

export const Context = createContext()

export default function Provider({children}){ 
    const [initialChallenges, setInitialChallenges] = useState(dataOfInitialChallenges)
  

    return(
        <Context.Provider value={{initialChallenges, setInitialChallenges}}>
            {children}
        </Context.Provider>
    )
}