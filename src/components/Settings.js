// ignore this page. deprecated, lol
import React, {useState, useContext,useEffect} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon  from 'react-native-vector-icons/AntDesign';
import { Context } from '../../context/Provider';

export default function PlayChallenges({navigation,route})  {
    const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser} = useContext(Context)
    const {showUserAndInitial,setShowUserAndInitial } = useContext(Context)
    const {showTheInitial, setShowInitial} = useContext(Context)
    const {userChallenges, userTruths} = useContext(Context)
    
    console.log('showOnlyCustomsOfUser',showOnlyCustomsOfUser)
    console.log('showTheInitial',showTheInitial)
    console.log('showuserAndInitial',showUserAndInitial )
  useEffect(() => {
    if(showOnlyCustomsOfUser == false && showUserAndInitial == false  ){
      console.log('nem ta chamando saporra')
      setShowInitial(true)
    }
}
  ),[ setShowOnlyCustomsOfUser ,setShowUserAndInitial]


    // useEffect(() => {
    //   if(showOnlyCustomsOfUser == true){
    //     setShowInitial(false)
    //     setShowUserAndInitial(false) 
    //     {console.log('pasou aqui por algum motivo')}
        
    //   }if(showUserAndInitial== false){
    //     setShowInitial(true)
        
    //   }
    // }),[setShowUserAndInitial, setShowOnlyCustomsOfUser]
      
    const ActivatedShowOnlyCustomsOfUser =()=>{
      if( userChallenges.length > 0 & userTruths.length > 0 ){
      setShowOnlyCustomsOfUser(!showOnlyCustomsOfUser)
      setShowInitial(false)
      setShowUserAndInitial(false)
    }else{
      Alert.alert('Erro','Você precisa ter criado pelo menos 1 desafio e 1 verdade.')
    }
  }
    
    return(
        <View style={styles.container} >
            <View style={{height: ('5%'), flexDirection:'row', marginVertical:20}} > 
              <TouchableOpacity onPress={() => {navigation.goBack()}}  >
                <Icon name='left' size={30} color='#ff66eb'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.goBack()}}  >
                <Icon style={{left:270}} name='instagram' size={30} color='#ff66eb'/>
              </TouchableOpacity>
              <Text style={styles.lettersOne}>Configurações</Text>

          </View>

          <View style={{flexDirection:'row',marginBottom:20, marginLeft:15, padding:10}} >
          <Text style={{fontSize:22, color:'white',alignSelf:'center', // esse bagulho tem que fi
        fontWeight:'300'           //car no meio 
        }}>Mostrar apenas desafios do usuario?</Text>
      <TouchableOpacity 
      onPress={ActivatedShowOnlyCustomsOfUser}
      style={{borderWidth:2,  borderRadius:5
      ,marginTop:5, backgroundColor:('#ff09de'),
      maxHeight:40, paddingRight: 5, justifyContent:'center', borderRadius:15
    }}  >
        <View  >
          {showOnlyCustomsOfUser==false?
           <Text>        </Text> 
           :
           <Icon size={30} name='check' ></Icon>
        }
        </View>
      </TouchableOpacity>
      
     </View>
      


           
           <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between'  } } >
              <View style={{right:20}}  >
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
            fontSize:25,
            color:('#ff66eb'),
            left: 30
        },
        lettersTwo:{
          fontSize:20,
          color:('#ff66eb'),
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