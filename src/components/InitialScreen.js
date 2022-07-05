import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Context } from '../.././context/Provider';
import AddDare from './AddDare';


//TODO: try understand use reducer, and all hooks

export default function ({navigation}){

  const {desafiosgg, setDesafio} = useContext(Context)
  

  const retrieveData = async () => {
    const pullDare = await AsyncStorage.getItem('itemList');
    const transDare = JSON.parse(pullDare)
    var challengesOfUser = [...desafiosgg, ...transDare]
    console.log('este é a fusão dos 2 desafios',challengesOfUser)
    return
  };
  React.useEffect(() => {
    retrieveData();
  }, []);

  
    
  return( 
  <View style={styles.container} >
      <View style={{height: ('5%')}} > 
        <Text style={styles.lettersOne}  >Dayvid  </Text>
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

       <TouchableOpacity onPress={()=> navigation.navigate('PlayChallenges', 
          // {challengesOfUser: challengesOfUser,
             {desafiosgg: desafiosgg })} >
          
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