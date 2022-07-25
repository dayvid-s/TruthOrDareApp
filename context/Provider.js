import React,{useState, createContext, useContext} from 'react';
import dataOfInitialChallenges from './../src/components/dataOfInitialChallenges';
import dataOfInitialTruths from './../src/components/dataOfInicialTruths';
export const Context = createContext()

export default function Provider({children}){ 
    const [initialChallenges, setInitialChallenges] = useState(dataOfInitialChallenges)
    const [userChallenges, setUserChallenges] = useState([]) 
    const [players, setPlayers] = useState([])
    const [nextPlayer, setNextPlayer] = useState(0)
    const [showOnlyCustomsOfUser, setShowOnlyCustomsOfUser] = useState(false)
    const [showTheInitial, setShowInitial]= useState(true)
    const [showUserAndInitial, setShowUserAndInitial] = useState(false)
    const [initialTruths, setInitialTruths] = useState(dataOfInitialTruths)
    const [userTruths, setUserTruths] = useState([])
    

    return(
        <Context.Provider value={{
            initialChallenges, setInitialChallenges,
            userChallenges, setUserChallenges,
            players, setPlayers,
            nextPlayer, setNextPlayer,
            showTheInitial, setShowInitial,
            showOnlyCustomsOfUser, setShowOnlyCustomsOfUser, 
            showUserAndInitial,setShowUserAndInitial, 
            initialTruths, setInitialTruths,
            userTruths, setUserTruths,

                }}>
            {children}
        </Context.Provider>
    )
}