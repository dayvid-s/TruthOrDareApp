import React, {useState, useContext, useEffect} from 'react';
import Icon  from 'react-native-vector-icons/Octicons';

import { KeyboardAvoidingView,
  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView, 
    FlatList
  } from 'react-native';
import {Context} from '../../context/Provider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListTruthsAndChallenges from '../components/ListTruthsAndChallenges';


export default function AddDare({navigation}) {
  const [inputBoxValue, setinputBoxValue] = useState();
  const {userChallenges, setUserChallenges} = useContext(Context)
  const {setShowOnlyCustomsOfUser} = useContext(Context)

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
    
    const handleRemoveChallenges = (challenge) => {
      if(userChallenges.length > 1){
        const newChallenges = userChallenges.filter(item => item != challenge);
        setUserChallenges(newChallenges);
    
      }else{
        const newChallenges = userChallenges.filter(item => item != challenge);
        setUserChallenges(newChallenges);
        setShowOnlyCustomsOfUser(false)
      }
    }
    
    return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}

      <TouchableOpacity style={styles.iconGoBack} onPress={()=>{ navigation.goBack()}}  >
      <View style= {{right:-15, marginVertical:20}}>
        <Icon name='chevron-left' size={30} color='#3cf' > </Icon>
      </View>
      </TouchableOpacity>
      <View style={styles.challengesWrapper}>
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova seus próprios desafios!
        </Text>
      <FlatList data={userChallenges} 
        renderItem={({item}) => <ListTruthsAndChallenges remove={()=>handleRemoveChallenges(item)}
        data={item}/> }>
      </FlatList>
      
      </View>
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeChallengesWrapper}
      >
        <TextInput placeholderTextColor={'grey'} style={styles.input} placeholder={'Adicione um desafio!'} value={inputBoxValue} onChangeText={text => setinputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleAddChallenges()}>
          <View style={styles.addWrapper}>
            <Icon name='plus' size={20} color='white' ></Icon>      
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
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#3cf',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  
});