import React, {useContext, useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Context } from '../.././context/Provider';
import Icon  from 'react-native-vector-icons/AntDesign';

//TODO: THE NEXT: YOU NEED UNDERSTAND HOW USE WITH ASSINCRONOUS FUNCTION
//TODO: try understand use reducer, and all hooks


export default function ({navigation}){
  const {players, addPlayers} = useContext(Context)
  const {nextPlayer, setNextPlayer} = useContext(Context)
  const {showUserAndInitial,setShowUserAndInitial } = useContext(Context)
  const {showTheInitial, setShowInitial} = useContext(Context)
  const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser} = useContext(Context)
    
  

  // useEffect(() => {
  //   if(showUserAndInitial == true){
  //     setShowInitial(false)
  //     setShowOnlyCustomsOfUser(false) 
      
      
  //   }if(showUserAndInitial== false && showOnlyCustomsOfUser== false){
  //     setShowInitial(true)
      
  //   }
  // }),[setShowUserAndInitial, setShowOnlyCustomsOfUser]

  const ActivatedShowUserAndInitial =()=>{
    setShowUserAndInitial(!showUserAndInitial)
    setShowInitial(false)
    setShowOnlyCustomsOfUser(false)
  }

  const goToSettings=()=>{
    navigation.navigate('Settings')
  }
  const goToSetUsers=()=>{
    navigation.navigate('CreateAndSetPlayers')
  }

  
  const randomChoice =()=>{
      const randomNumber = (Math.random()*100).toFixed(2)

      if (randomNumber >50){
        navigation.push('PlayChallenges')
      }else{
        navigation.push('PlayTruth')
      }
    }  
    
    return( 
  <View style={styles.container} >
      <View style={{height: ('5%'), flexDirection:'row' ,marginVertical:18, }} > 
      <TouchableOpacity onPress={goToSetUsers} >
          <Icon  name='addusergroup' size={30} style={{color:'blue' 
        ,marginVertical:5
        }} ></Icon>
      
        </TouchableOpacity>
        
        <View style={{justifyContent:'center', left:110 }} >
        <Text style={styles.lettersOne}  >{players[nextPlayer]}</Text>
        </View>
        {/* <View style={{borderWidth:1 , borderRadius:25, backgroundColor:'#ff09de',opacity:8 ,
            width: 50,height: 50, left: 200  ,alignItems:'center',
            justifyContent:'center',
            marginLeft:25
          }} > */}
            <TouchableOpacity onPress={goToSettings} >
          <Icon  name='menufold' size={30} style={{color:'blue',left: 180, marginLeft:35
            ,marginVertical:5          
        }} ></Icon>
        </TouchableOpacity>
      
          {/* </View> */}
    </View>
       <View style={{justifyContent:'space-evenly'}}  >
 
       <TouchableOpacity onPress={()=> navigation.push('PlayTruth')} >
         <Text style={styles.lettersThree} 
         >VERDADE 
         </Text>    
       </TouchableOpacity>
       <Text style={{  alignSelf:'center'}} >_________</Text>
       <TouchableOpacity onPress={randomChoice} >
          <Text style={{fontSize:28,textAlign:'center',color:('#De2674'), fontWeight:('300')}}
              >ESCOLHA ALEATÓRIA</Text>
       </TouchableOpacity>
          <Text style={{  alignSelf:'center'}} >_________</Text>   
{/* 
       <TouchableOpacity onPress={()=> navigation.navigate('PlayChallenges', 
          // {challengesOfUser: challengesOfUser,
             {initialChallenges: initialChallenges })} >
          
          <Text style={styles.lettersThree}>DARE</Text>
       </TouchableOpacity>
         */}
         
       <TouchableOpacity onPress={()=> navigation.push('PlayChallenges')} >
          
          <Text style={styles.lettersThree}>DESAFIO</Text>
       </TouchableOpacity>
        
     </View>
     


     <View style={{flexDirection:'row',marginBottom:20, marginLeft:30, padding:10}} >
          <Text style={{fontSize:22, color:'white',alignSelf:'center', // esse bagulho tem que fi
        fontWeight:'300'           //car no meio 
        }}>Incluir "Personalizadas"?</Text>
      <TouchableOpacity 
      onPress={ActivatedShowUserAndInitial}
      style={{borderWidth:2,  marginLeft:9,borderRadius:5
      ,marginTop:5, backgroundColor:('#ff09de'),
      maxHeight:23,maxWidth:23
    }}  >
        <View  >
          {showUserAndInitial==false?
           <Text>     </Text> 
           :
           <Icon size={20} name='check' ></Icon>
        }
        </View>
      </TouchableOpacity>
      
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
      color:('#fa29de'),
      alignSelf:'center',
      textAlign:'center',
      justifyContent:'center'
  },
  lettersThree:{
    fontSize:40,
    color:('#ff09de'),
    //color:('#f9de'), não vou mentir, mas essa cor ficou linda
    alignSelf:'center',
    

}
});