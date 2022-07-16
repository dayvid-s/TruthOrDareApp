import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { Context } from '../../context/Provider';
import ShuffleArray from './ShuffleArray';

export default function PlayChallenges({navigation,route})  {

  const {initialChallenges, userChallenges} = useContext(Context)
  const [challengeNumber, setChallengeNumber] = useState(0) 
  const {players, addPlayers} = useContext(Context)
  const {nextPlayer, setNextPlayer} = useContext(Context)
  const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser } = useContext(Context)  
  const {showUserAndInitial,setShowUserAndInitial } = useContext(Context)
  const {showTheInitial, setShowInitial} = useContext(Context)
  
  var allChallenges = [...initialChallenges, ...userChallenges]
  ShuffleArray(allChallenges)
  const countChallenges=()=>{  
    if(showUserAndInitial== true){
      if (allChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        console.log('deu merda aqui')
        setChallengeNumber(0)
      } 

        
      }
    if( showOnlyCustomsOfUser == true)
      { if (userChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)} 
        else{
          setChallengeNumber(0)
      }      
    }
    if(showTheInitial== true){

      if (initialChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        setChallengeNumber(0)
      } 
    }
}
  const challengeConcluded =()=>{
    // addPlayers(changePosition(players,0,1))
    // console.log(players)

    if (players.length -1> nextPlayer ) {                       
      setNextPlayer(nextPlayer+1)} 
    else{
      setNextPlayer(0)
    }
  

    navigation.goBack()
  }
  return(
        <View style={styles.container} >
            <View style={{height: ('5%')}} >
              <View >
                
              <Text style={styles.lettersOne}>{players[nextPlayer]}</Text>
              <View style={{marginVertical:-6}} >
              <TouchableOpacity style={{maxWidth:30}}  onPress={() => {navigation.goBack()}}  >
                <Icon name='left' size={30} color='#ff09de'/>
              </TouchableOpacity>
            </View>
              <Text style={styles.lettersTwo} >Hora de pagar um desafio!</Text>
                </View> 
          </View>
            <View style={{justifyContent:'space-evenly'}}  >
            <Text style={{  alignSelf:'center',color:('#De2674')}} >______________</Text>
            <View>
            <View>
              {console.log('initial:',showTheInitial)}
              {console.log('userandinitial',showUserAndInitial)}
              {console.log('onlycustom',showOnlyCustomsOfUser)}
              
              {showUserAndInitial ==true  && <Text style={styles.conditionalrender} 
              >{allChallenges[challengeNumber]}</Text>}     
              
              {showTheInitial == true && <Text style={styles.conditionalrender} 
              >{initialChallenges[challengeNumber]}</Text>}     
              

              {showOnlyCustomsOfUser ==true && <Text style={styles.conditionalrender} 
              >{userChallenges[challengeNumber]}</Text>}     
                      
                      {/* Possiveis 3 renderizações. sendo elas: */}
                      {/* Desafios do usuario e desafio inicial (allChallenges)  */}
                      {/* Apenas desafio iniciais, que já vem pre-estabelecidos no app.(initialChallenges) */}
                      {/* Apenas desafios criados pelo usuario (userChallenges) */}
                      {/* //esse && significa que se apenas essa renderização for veridica,  */}
                      {/* apenas ela é renderizada.  */}
            </View>

            </View>
              <Text style={{  alignSelf:'center',color:('#De2674')}} >______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:30}}  >
                <TouchableOpacity onPress={countChallenges}  >
                  <View style={{borderWidth:1 , borderRadius:100, backgroundColor:'#ff09de',
                    width: 70,height: 70, justifyContent:'center', alignItems: 'center',
                    }} >
                      <Icon name='reload1' size={30} color='white' />
                  </View>
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={challengeConcluded} >
                  <View style={{borderWidth:1 , borderRadius:100, backgroundColor:'#ff09de',
                      width: 70,height: 70, justifyContent:'center', alignItems: 'center',
                      }} >
                      <Icon name='caretright' size={30} color='white'/>
                  </View>
                  
                </TouchableOpacity>
              </View>
              
              <View style={{left:30}}>


                <TouchableOpacity onPress={()=> navigation.push('AddDare')}>
              <View style={{borderWidth:1 , borderRadius:70, backgroundColor:'#ff09de',
                      width: 70,height: 70, justifyContent:'center', alignItems: 'center',
                        }} >
                      <Text style={{fontSize:45,color:'white',marginVertical:-50 }} >+</Text>

                  </View>
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
          color:('grey'),
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