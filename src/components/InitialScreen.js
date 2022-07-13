import React, {useContext, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Context } from '../.././context/Provider';

//TODO: THE NEXT: YOU NEED UNDERSTAND HOW USE WITH ASSINCRONOUS FUNCTION
//TODO: try understand use reducer, and all hooks


export default function ({navigation}){
  const {players, addPlayers} = useContext(Context)
  const {nextPlayer, setNextPlayer} = useContext(Context)
  
  function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  };
  
  const challengeavanar =()=>{
    addPlayers(changePosition(players,0,1))
    console.log(players)
    navigation.push('PlayChallenges')
  }
  
  return( 
  <View style={styles.container} >
      <View style={{height: ('5%')}} > 
        <View >
        <Text style={styles.lettersOne}  >{players[nextPlayer]}</Text>
        {console.log(players)}

        </View>

        <Text style={{  alignSelf:'center'}} >_________</Text>
        <Text style={styles.lettersTwo} >HARD</Text>
    </View>
       <View style={{justifyContent:'space-evenly'}}  >
 
       <TouchableOpacity onPress={()=> navigation.push('PlayTruth')} >
         <Text style={styles.lettersThree} 
         >VERDADE
         </Text>    
       </TouchableOpacity>
       <Text style={{  alignSelf:'center'}} >  _________</Text>
       <Text style={{fontSize:28,textAlign:'center',color:('#De2674'), fontWeight:('300')}}
            >ESCOLHA ALEATÓRIA</Text>
       <Text style={{  alignSelf:'center'}} >  _________</Text>   
{/* 
       <TouchableOpacity onPress={()=> navigation.navigate('PlayChallenges', 
          // {challengesOfUser: challengesOfUser,
             {initialChallenges: initialChallenges })} >
          
          <Text style={styles.lettersThree}>DARE</Text>
       </TouchableOpacity>
         */}
         
       <TouchableOpacity onPress={()=> navigation.push('PlayChallenges')} >
          
          <Text style={styles.lettersThree}>DESAFIO</Text>
       </TouchableOpacity>
        
     </View>
     
     <View style={{flexDirection:'row'}} >
          <Text style={{fontSize:22, color:'white',alignSelf:'center', // esse bagulho tem que fi
        fontWeight:'300'           //car no meio 
        }}>Incluir "Personalizadas"?</Text>
     </View>

  </View>
     
)}

const styles = StyleSheet.create({
  container:{
    backgroundColor: (`#000000`),
    height:'100%',
    padding:20,
    justifyContent:'space-between'
    
  },
  lettersOne:{
      fontSize:30,
      color:('#ff09de'),
      alignSelf:'center',
      textAlign:'center',
  },
  lettersTwo:{
    fontSize:20,
    color:('#ff66eb'),
    color:('#be2596'),
    fontStyle:('normal'),
    fontWeight:('100'),
    alignSelf:'center'
  },
  lettersThree:{
    fontSize:40,
    color:('#ff09de'),
    alignSelf:'center',
    

}
});