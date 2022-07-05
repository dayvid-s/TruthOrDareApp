import React,{useState, createContext, useContext} from 'react';
import desafios from './../src/components/desafios';

export const Context = createContext()

export default function Provider({children}){ 
    const [desafiosgg, setDesafio] = useState(desafios)
  

    return(
        <Context.Provider value={{desafiosgg, setDesafio}}>
            {children}
        </Context.Provider>
    )
}