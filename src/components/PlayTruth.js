// man, the documentation it's ur bestfriend, was just you go at the
// documentation of react navigation, that you would solved this problem of params
import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { Context } from '../../context/Provider';
import ShuffleArray from './ShuffleArray';

export default function PlayTruths({navigation,route})  {

  const {initialTruths, userTruths, showOnlyCustoms, showUserAndInitial} = useContext(Context)
  const [truthNumber, setTruthNumber] = useState(0) 
  var allTruths = [...initialTruths, ...userTruths]
  ShuffleArray(allTruths)
  console.log(allTruths)
  const countTruth=()=>{  
    if (allTruths.length-1 > truthNumber ) {                       
      setTruthNumber(truthNumber+1)} else{
      setTruthNumber(0)
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
              >{allTruths[truthNumber]}</Text>
              : <Text> {initialTruths[truthNumber]}</Text>}
              
              {showOnlyCustoms&& <Text style={styles.conditionalrender} 
              >{userTruths[truthNumber]} </Text>}
                      
                      {/* Possiveis 3 renderizações. sendo elas: */}
                      {/* Truths do usuario e Truth inicial (allTruths)  */}
                      {/* Apenas Truth iniciais, que já vem pre-estabelecidos no app.(initialTruths) */}
                      {/* Apenas Truths criados pelo usuario (userTruths) */}
            </View>

            </View>
              <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
                <TouchableOpacity onPress={countTruth} >
                <Icon name='reload1' size={70} color='#ff09de' />
                </TouchableOpacity>
              </View>
              
              <View >
                <TouchableOpacity onPress={() => {navigation.goBack()}} >
                  <Icon name='caretright' size={70} color='#ff09de'/>
                </TouchableOpacity>
              </View>
              
              <View style={{left:20}}>
                <TouchableOpacity onPress={()=> navigation.push('AddTruth')}>
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