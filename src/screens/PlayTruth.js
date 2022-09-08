import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/Provider';
import ShuffleArray from '../components/ShuffleArray';

export default function PlayTruth({navigation})  {

  const {initialTruths, userTruths} = useContext(Context)
  const [challengeNumber, setChallengeNumber] = useState(0) 
  const {players} = useContext(Context)
  const {nextPlayer, setNextPlayer} = useContext(Context)
  const {showOnlyCustomsOfUser} = useContext(Context)  
  const {showUserAndInitial} = useContext(Context)
  const {showTheInitial, setShowInitial} = useContext(Context)
  
  ShuffleArray(initialTruths)
  var allTruths = [...initialTruths, ...userTruths]
  ShuffleArray(allTruths)

  const reloadTruths= ()=> {  
    if(showUserAndInitial== true){
      if (allTruths.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        setChallengeNumber(0)
      }}
    if( showOnlyCustomsOfUser == true)
      { if (userTruths.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)} 
        else{
          setChallengeNumber(0)
      }}
    if(showTheInitial== true){
      if (initialTruths.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        setChallengeNumber(0)
      } 
    }}

  
  const truthConcluded =()=>{
    if (players.length -1> nextPlayer ) {                       
      setNextPlayer(nextPlayer+1)} 
    else{
      setNextPlayer(0)
    }
      navigation.goBack()
  }
  useEffect(() => {
    if(showOnlyCustomsOfUser == false && showUserAndInitial == false  ){
      setShowInitial(true)
    }
}
  ),[]


  return(
        <View style={styles.container} >
            <View  >
              <Text style={styles.nameOfPlayer}>{players[nextPlayer]}</Text>
              
              <TouchableOpacity style={styles.iconGoBack}  onPress={() => {navigation.goBack()}}  >
                <Icon name='left' size={28} color='#00bfff'/>
              </TouchableOpacity>
              
              <Text style={styles.welcomeMessage} >Hora da verdade!</Text>
            </View>
            
            <View >
            <Text style={styles.underscore} >______________</Text>
              
              {showUserAndInitial ==true  && <Text style={styles.truths} 
              >{allTruths[challengeNumber]}</Text>}     
              
              {showTheInitial == true && <Text style={styles.truths} 
              >{initialTruths[challengeNumber]}</Text>}     
              
              {showOnlyCustomsOfUser ==true && <Text style={styles.truths} 
              >{userTruths[challengeNumber]}</Text>}     

                      
                      {/* Possiveis 3 renderizações. sendo elas: */}
                      {/* Desafios do usuario e desafio inicial (allTruths)  */}
                      {/* Apenas desafio iniciais, que já vem pre-estabelecidos no app.(initialChallenges) */}
                      {/* Apenas desafios criados pelo usuario (userChallenges) */}
                      {/* //esse && significa que se caso avançar pelaa validação  */}
                      {/* a view inteira é renderizada  */}

              <Text style={styles.underscore} >______________</Text>
            </View>

              {/* Now, the three icons. */}
            
          <View style={styles.wrapperOfIcons } >
            
              <View style={{left:-30}}  >
                <TouchableOpacity onPress={reloadTruths}  >
                  <View style={styles.bottomIcons} >
                      <Icon name='reload1' size={30} color='white' />
                  </View>
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={truthConcluded} >
                  <View style={styles.bottomIcons} >
                      <Icon name='caretright' size={30} color='white'/>
                  </View>
                </TouchableOpacity>
              </View>
                  
              <View style={{right:-30}}>
                <TouchableOpacity onPress={()=> navigation.push('AddTruth')}>
                  <View style={styles.bottomIcons} >
                    <Ionicon style={{left:13}} name='add-outline' size={43} color='white' >  </Ionicon>
                  </View>
                </TouchableOpacity>                
              </View>
            
          </View>
              
        </View>
      
      )}
  
      const styles = StyleSheet.create({
        container:{
          backgroundColor: (`#000000`),
          padding:20,
          justifyContent:'space-between',
          flex:1
          
        },
        nameOfPlayer:{  
          fontSize:30,
          color:('#3cf'),
          alignSelf:'center',
          justifyContent:'center',
        },
        welcomeMessage:{
          fontSize:18,
          color:('#3cf'),
          fontStyle:('normal'),
          alignSelf:'center',
          fontWeight:"500",
        },
        iconGoBack:{
          maxWidth:30,
          marginVertical:-6,
        },
        underscore:{
          alignSelf:'center',
          color:('#6495ed')
        },
        truths:{
          fontSize:28,
          textAlign:'center',
          color: 'grey'
        },
        wrapperOfIcons:{
          flexDirection:'row',
          alignSelf:'center', 
          justifyContent:'space-between'  
        },
        bottomIcons:{
          borderWidth:1,
          borderRadius:100,
          backgroundColor:'#0000ff',
          width: 70,
          height: 70,
          justifyContent:'center',
          alignItems: 'center',
        }
      });