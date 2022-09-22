import React, {useState, useContext, useEffect} from 'react';
import Icon  from 'react-native-vector-icons/Octicons';

import { KeyboardAvoidingView,
  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    FlatList,
    Modal
  } from 'react-native';
import { Context } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListTruthsAndChallenges from '../components/ListTruthsAndChallenges';


export default function AddDare({navigation}) {
  const [inputBoxValue, setinputBoxValue] = useState();
  const {userChallenges, setUserChallenges} = useContext(Context)
  const {setShowOnlyCustomsOfUser} = useContext(Context)
  const [index, setIndex] = useState(null);
 
  useEffect(() => {
     getChallengesFromUserDevice();
  },[])

  useEffect(() => {
    saveChallengesInUserDevice(userChallenges);
  }),[userChallenges]
  
  const handleAddChallenges = () => {
    if (inputBoxValue == null ){
      alert("Escreva algo")
    }else{
      Keyboard.dismiss();
      setUserChallenges([...userChallenges, inputBoxValue])
      setinputBoxValue(null);
    }
  }
  
  const saveChallengesInUserDevice = async userChallenges => {
    try {
      const stringifyChallenges = JSON.stringify(userChallenges)
      await AsyncStorage.setItem('challenges',stringifyChallenges )
    } catch (error) {
      console.log(error)
    }  }

  
  const getChallengesFromUserDevice = async () => {
    try {
      const challenges = await AsyncStorage.getItem('challenges');
      if (challenges != null) {
        setUserChallenges(JSON.parse(challenges));}
    } catch (error) {
      console.log(error);}
        };
    


    const handleStartEditChallenge=(challenge)=>{
      setinputBoxValue(challenge)
      setIndex(userChallenges.indexOf(challenge))
      
    }

    const handleEditChallenge =()=>{
      if (index !== -1) {
        var copyChallenges= [...userChallenges]
        copyChallenges[index] = inputBoxValue;
        setUserChallenges(copyChallenges);
    }}
  
  const handleRemoveChallenges = (challenge) => {
      //this "challenge is the item that i pass"
      if(userChallenges.length > 1){
        var newChallenges = userChallenges.filter(item => item != challenge);
        setUserChallenges(newChallenges);
    
      }else{
        var newChallenges = userChallenges.filter(item => item != challenge);
        setUserChallenges(newChallenges);
        setShowOnlyCustomsOfUser(false)
      }
    }
    
    return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.iconGoBack} onPress={()=>{ navigation.goBack()}}  >
      <View style= {{right:-15, marginVertical:20}}>
        <Icon name='chevron-left' size={30} color='#3cf' > </Icon>
      </View>
      </TouchableOpacity>
      <View style={styles.challengesWrapper}>
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova seus próprios desafios!
        </Text>
      <FlatList data={userChallenges} 
        renderItem={({item}) => <ListTruthsAndChallenges 
        data={item} edit = {()=>handleStartEditChallenge(item)} 
        remove={()=>handleRemoveChallenges(item)}/> }>
      </FlatList>
      
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeChallengesWrapper}
      >
        <TextInput placeholderTextColor={'grey'} style={styles.input} placeholder={'Adicione um desafio!'} value={inputBoxValue} onChangeText={text => setinputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleAddChallenges()}>
          <View style={styles.addAndEdit}>
            <Icon name='plus' size={20} color='white' ></Icon>      
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditChallenge()}>
          <View style={styles.addAndEdit}>
            <Text style={styles.edit} >Editar</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  iconGoBack:{
    maxWidth:30,
    marginVertical:-6,
    maxHeight:70
  },
  challengesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AFADAC',
    marginBottom:20
  },
  writeChallengesWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#3cf',
    borderWidth: 1,
    width: 250,
    backgroundColor:'#rgb(19, 20, 24)',
  },
  addAndEdit: {
    width: 60,
    height: 60,
    backgroundColor: '#3cf',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  edit:{
    fontWeight:'400',
    color:'#fff'
  }
});