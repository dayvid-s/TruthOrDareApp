import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { Context } from '../../context/Provider';

export default function CreateAndAddPlayers({navigation,route})  {

  const {players, addPlayers} = useContext(Context)
  
  return(
        <View style={styles.container} >
            <View> 
            <Text style={styles.lettersOne}>Jogadores:</Text>
          </View>
            <View style={{justifyContent:'space-evenly'}}  >
            <Text style={{  alignSelf:'center',color:('#De2674')}} >______________</Text>
            <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
            </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View >
                <TouchableOpacity onPress={()=> navigation.push('InitialScreen')}>
                  <Icon name='caretright' size={70} color='#ff09de'/>
                </TouchableOpacity>
              </View>
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
        }, 
         conditionalrender:{
          fontSize:28,
          textAlign:'center'
      
      }
      });   