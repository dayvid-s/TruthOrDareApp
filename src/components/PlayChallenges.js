// man, the documentation it's ur bestfriend, was just you go at the
// documentation of react navigation, that you would solved this problem of params
import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { Context } from '../../context/Provider';
import ShuffleArray from './ShuffleArray';

export default function PlayChallenges({navigation,route})  {

  const {initialChallenges, userChallenges, showOnlyCustoms, showUserAndInitial} = useContext(Context)
  const [challengeNumber, setChallengeNumber] = useState(0) 
  var allChallenges = [...initialChallenges, ...userChallenges]
  ShuffleArray(allChallenges)
  console.log(allChallenges)
  const addDesafio=()=>{  
    if (allChallenges.length-1 > challengeNumber ) {                       
      setChallengeNumber(challengeNumber+1)} else{
      setChallengeNumber(0)
    }
  }
  
  return(
        <View style={styles.container} >
            <View style={{height: ('5%')}} > 
              <Text style={styles.lettersOne}  >Dayvid </Text>
              <TouchableOpacity onPress={() => {navigation.goBack()}}  >
                <Icon name='left' size={30} color='#ff09de'/>
              </TouchableOpacity>
              <Text style={styles.lettersTwo} >HARD</Text>
          </View>
            <View style={{justifyContent:'space-evenly'}}  >
            <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
            <View>
            <View>

              {showUserAndInitial?<Text style={styles.conditionalrender} 
              >{allChallenges[challengeNumber]}</Text>
              : <Text> {initialChallenges[challengeNumber]}</Text>}
              
              {showOnlyCustoms&& <Text style={styles.conditionalrender} 
              >{userChallenges[challengeNumber]} </Text>}
                      
                      {/* Possiveis 3 renderizações. sendo elas: */}
                      {/* Desafios do usuario e desafio inicial (allChallenges)  */}
                      {/* Apenas desafio iniciais, que já vem pre-estabelecidos no app.(initialChallenges) */}
                      {/* Apenas desafios criados pelo usuario (userChallenges) */}
            </View>

            </View>
              <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
                <TouchableOpacity onPress={addDesafio}  >
                <Icon name='reload1' size={70} color='#ff09de' />
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={() => {navigation.goBack()}} >
                  <Icon name='caretright' size={70} color='#ff09de'/>
                </TouchableOpacity>
              </View>
              
              <View style={{left:20}}>
                <TouchableOpacity onPress={()=> navigation.push('AddDare')}>
                <Icon name='pluscircle' size={70} color='#ff09de' />
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