// man, the documentation it's ur bestfriend, was just you go at the
// documentation of react navigation, that you would solved this problem of params
import React, {useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import desafios from './desafios';
import { useRoute } from '@react-navigation/native';

const shuffle=()=>{
  var currentIndex = desafios.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = desafios[currentIndex];
      desafios[currentIndex] = desafios[randomIndex];
      desafios[randomIndex] = temporaryValue;
  }}
// o array vazio é length 0, e assim por diante. agora preciso fazer com que
// esse numero seja adicionado conforme tem o clique
shuffle(desafios)
export default function Truth()  {
  
  const navigation = useNavigation();
  const route = useRoute()
  React.useEffect(() => {
    if(route.params?.itemDesafioszsz){ 
      var colardesafio = (route.params.itemDesafioszsz).slice
  //  var adicionar=colardesafio.push(route.params.itemDesafioszsz) // aqui tem que ser um append, e não uma cópia  
      console.warn(route.params.itemDesafioszsz.typeof)
      console.log(typeof route.params.itemDesafioszsz)
      

}
  }, [route.params?.itemDesafioszsz])

  const [numerodesafio, setNumeroDesafio] = useState([])
  const addDesafio=()=>{
    // aqui precisa de uma condição, pq senao vai chegar num nivel que não tem mais desafio
    setNumeroDesafio(numerodesafio+1)
  
  }

  return(
        <View style={styles.container} >
            <View style={{height: ('5%')}} > 
              <Text style={styles.lettersOne}  >Dayvid{route.params?.itemDesafioszsz}</Text>
              <TouchableOpacity onPress={() => {navigation.goBack()}}  >
                 <Icon name='left' size={30} color='#ff09de'/>
              </TouchableOpacity>
              <Text style={styles.lettersTwo} >HARD</Text>
          </View>
             <View style={{justifyContent:'space-evenly'}}  >
       
             <View >
               <Text style={styles.lettersThree} 
               >TRUTH
               </Text>    
             </View>
             <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             
             <View>
               <Text style={{fontSize:28,textAlign:'center'}} >{desafios[numerodesafio.length]} </Text>
            </View>

              <Text style={{  alignSelf:'center',color:('#De2674')}} >  ______________</Text>
             </View>
           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
                <TouchableOpacity onPress={addDesafio}  >
                <Icon name='reload1' size={70} color='#ff09de' />
                </TouchableOpacity>
              </View>
              <View>
                 <Icon name='caretright' size={70} color='#ff09de'/>
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
          
      
      }
      });