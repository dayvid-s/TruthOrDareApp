import React, {useContext, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Context } from '../.././context/Provider';

//TODO: THE NEXT: YOU NEED UNDERSTAND HOW USE WITH ASSINCRONOUS FUNCTION
//TODO: try understand use reducer, and all hooks


export default function ({navigation}){

  const {initialChallenges, setInitialChallenges} = useContext(Context)
  const [challengesOfUser, setChallengesOfUser] = useState()
  

  const retrieveData = async () => {
    const pullChallenge = await AsyncStorage.getItem('itemList'); // pullChallenge consiste em  
    const transDare = JSON.parse(pullChallenge)         //recuperar os desafios do asyncstorage
    await pullChallenge                                 //pela chave.
    setChallengesOfUser ([...initialChallenges, ...transDare]) 
    
    return
  };
  React.useEffect(() => {
    retrieveData();
  }, []);

  const handleaDvance = async () => {
    await retrieveData()
    console.log(challengesOfUser)
     navigation.navigate('PlayChallenges', 
     {challengesOfUser: challengesOfUser,
       initialChallenges: initialChallenges }) 

    return
  };

  
    
  return( 
  <View style={styles.container} >
      <View style={{height: ('5%')}} > 
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.lettersOne}  >Dayvid  </Text>
        
        </View>

        <Text style={{  alignSelf:'center'}} >_________</Text>
        <Text style={styles.lettersTwo} >HARD</Text>
    </View>
       <View style={{justifyContent:'space-evenly'}}  >
 
       <TouchableOpacity onPress={()=> navigation.push('PlayTruth')} >
         <Text style={styles.lettersThree} 
         >TRUTH
         </Text>    
       </TouchableOpacity>
       <Text style={{  alignSelf:'center'}} >  _________</Text>
       <Text style={{fontSize:28,textAlign:'center',color:('#De2674'), fontWeight:('300')}}
            >RANDOM CHANCE</Text>
       <Text style={{  alignSelf:'center'}} >  _________</Text>   
{/* 
       <TouchableOpacity onPress={()=> navigation.navigate('PlayChallenges', 
          // {challengesOfUser: challengesOfUser,
             {initialChallenges: initialChallenges })} >
          
          <Text style={styles.lettersThree}>DARE</Text>
       </TouchableOpacity>
         */}
         
       <TouchableOpacity onPress={handleaDvance} >
          
          <Text style={styles.lettersThree}>DARE</Text>
       </TouchableOpacity>
        
     </View>
     
     <View style={{flexDirection:'row'}} >
          <Text style={{fontSize:25, textAlign:'center', color:'white', width:'80%',
        fontWeight:'300'
        }}>Include "Custom"?</Text>
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
      left: 130
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