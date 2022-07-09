import React,{useState, createContext, useContext} from 'react';
import dataOfInitialChallenges from './../src/components/dataOfInitialChallenges';
import dataOfInitialTruths from './../src/components/dataOfInicialTruths';
export const Context = createContext()

export default function Provider({children}){ 
    const [initialChallenges, setInitialChallenges] = useState(dataOfInitialChallenges)
    const [userChallenges, setUserChallenges] = useState([]) 
    const [showOnlyCustoms, setShowOnlyCustoms] = useState(false)
    const [showUserAndInitial, setShowUserAndInitial] = useState(true)
    const [initialTruths, setInitialTruths] = useState(dataOfInitialTruths)
    const [userTruths, setUserTruths] = useState([])

    return(
        <Context.Provider value={{
            initialChallenges, setInitialChallenges,
            userChallenges, setUserChallenges,
            showOnlyCustoms, setShowOnlyCustoms, 
            showUserAndInitial,setShowUserAndInitial, 
            initialTruths, setInitialTruths,
            userTruths, setUserTruths,

                }}>
            {children}
        </Context.Provider>
    )
}