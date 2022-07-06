import React,{useState, createContext, useContext} from 'react';
import initialChallenges from '../src/components/initialChallenges';

export const Context = createContext()

export default function Provider({children}){ 
    const [desafiosgg, setDesafio] = useState(initialChallenges)
  

    return(
        <Context.Provider value={{desafiosgg, setDesafio}}>
            {children}
        </Context.Provider>
    )
}