import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import Ionicon  from 'react-native-vector-icons/Ionicons';
import { Context } from '../../context/Provider';
import ShuffleArray from '../components/ShuffleArray';



export default function PlayChallenges({navigation})  {
  const {initialChallenges, userChallenges} = useContext(Context)
  const [challengeNumber, setChallengeNumber] = useState(0) 
  const {players, addPlayers} = useContext(Context)
  const {nextPlayer, setNextPlayer} = useContext(Context)
  const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser } = useContext(Context)  
  const {showUserAndInitial,setShowUserAndInitial } = useContext(Context)
  const {showTheInitial, setShowInitial} = useContext(Context)
  var allChallenges = [...initialChallenges, ...userChallenges]
  
  ShuffleArray(allChallenges)

  const reloadChallenges= ()=> {  
    if(showUserAndInitial== true){
      if (allChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        setChallengeNumber(0)
      }}
    if( showOnlyCustomsOfUser == true)
      { if (userChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)} 
        else{
          setChallengeNumber(0)
      }}
    if(showTheInitial== true){
      if (initialChallenges.length-1 > challengeNumber ) {                       
        setChallengeNumber(challengeNumber+1)
      } 
      else{
        setChallengeNumber(0)
      } 
    }}

  
  const challengeConcluded =()=>{
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
                <Icon name='left' size={28} color='#00bfff' />
              </TouchableOpacity>
              
              <Text style={styles.welcomeMessage} >Hora de pagar um desafio!</Text>
            </View>
            
            <View >
            <Text style={styles.underscore} >______________</Text>
              {console.log('initial:',showTheInitial)}
              {console.log('userandinitial',showUserAndInitial)}
              {console.log('onlycustom',showOnlyCustomsOfUser)}
              
              {showUserAndInitial ==true  && <Text style={styles.challenges} 
              >{allChallenges[challengeNumber]}</Text>}     
              
              {showTheInitial == true && <Text style={styles.challenges} 
              >{initialChallenges[challengeNumber]}</Text>}     
              
              {showOnlyCustomsOfUser ==true && <Text style={styles.challenges} 
              >{userChallenges[challengeNumber]}</Text>}     

                      
                      {/* Possiveis 3 renderizações. sendo elas: */}
                      {/* Desafios do usuario e desafio inicial (allChallenges)  */}
                      {/* Apenas desafio iniciais, que já vem pre-estabelecidos no app.(initialChallenges) */}
                      {/* Apenas desafios criados pelo usuario (userChallenges) */}
                      {/* //esse && significa que se caso avançar pelaa validação  */}
                      {/* a view inteira é renderizada  */}

              <Text style={styles.underscore} >______________</Text>
            </View>

              {/* Now, the three icons. */}
            
          <View style={styles.wrapperOfIcons } >
            
              <View style={{left:-30}}  >
                <TouchableOpacity onPress={reloadChallenges}  >
                  <View style={styles.bottomIcons} >
                      <Icon name='reload1' size={30} color='white' />
                  </View>
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={challengeConcluded} >
                  <View style={styles.bottomIcons} >
                      <Icon name='caretright' size={30} color='white'/>
                  </View>
                </TouchableOpacity>
              </View>
                  
              <View style={{right:-30}}>
                <TouchableOpacity onPress={()=> navigation.push('AddDare')}>
                <View style={styles.bottomIcons} >
                    <Ionicon style={{left:13}} name='add-outline' size={43} color='white' >  </Ionicon>
                  </View>
                  {/* <PlusIcon></PlusIcon> */}
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
          color:'#3cf',
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
        challenges:{
          fontSize:28,
          textAlign:'center',
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