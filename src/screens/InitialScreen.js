import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/Provider';
import Icon  from 'react-native-vector-icons/AntDesign';
import ThreeItems from '../components/ThreeItems';



export default function ({navigation}){
  const {players} = useContext(Context)
  const {nextPlayer} = useContext(Context)
  const {showUserAndInitial,setShowUserAndInitial } = useContext(Context)
  const {setShowInitial} = useContext(Context)
  const {setShowOnlyCustomsOfUser} = useContext(Context)
    
  

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

    <ThreeItems 
        users={goToSetUsers}      text={players[nextPlayer]}     settings={goToSettings} 
    ></ThreeItems>


    <View style={{justifyContent:'space-evenly'}}  >
      <TouchableOpacity onPress={()=> navigation.push('PlayTruth')} >
        <Text style={styles.choiceOfUser} >VERDADE </Text>    
      </TouchableOpacity>
      
      <Text style={styles.underscore} >________________</Text>
      
      <TouchableOpacity onPress={randomChoice} >
        <Text style={styles.randomChoice}>ESCOLHA ALEATÓRIA</Text>
      </TouchableOpacity>
      
      <Text style={styles.underscore} >________________</Text>   
      
      <TouchableOpacity onPress={()=> navigation.push('PlayChallenges')} >
        <Text style={styles.choiceOfUser}>DESAFIO</Text>
      </TouchableOpacity>
        
    </View>
    

    <View style={styles.wrapperOfToggle} >
      <Text style={styles.includeCustoms}>Incluir "Personalizadas"?</Text>
      <TouchableOpacity onPress={ActivatedShowUserAndInitial} style={styles.toggle}  >
        <View>
          {showUserAndInitial==false?
            <Text>     </Text> 
            :
            <Icon style={{backgroundColor:'#3cf', }}  size={18} name='check' ></Icon>
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
  choiceOfUser:{
    fontSize:35,
    color:('#09de'),
    //color:('#f9de'), não vou mentir, mas essa cor ficou linda
    alignSelf:'center',
    marginTop:20,marginBottom:20,
},
  underscore:{
    alignSelf:'center',
    fontWeight:'100',
    marginBottom:3,
    marginTop:3
  },
  randomChoice:{
    fontSize:28,
    textAlign:'center',
    color:('#322ede'),
    fontWeight:('500')
    },
  wrapperOfToggle:{
    flexDirection:'row',
    marginBottom:20, 
    marginLeft:30,
    padding:10
  },
  includeCustoms:{
    fontSize:22,
    color:'white',
    alignSelf:'center',
    fontWeight:'300'       
  },
  toggle:{
    borderWidth:3,  
    marginLeft:13,
    borderRadius:1,
    marginTop:7,
    borderColor:'#3cf',
    maxHeight:22,
    maxWidth:23
  }
});