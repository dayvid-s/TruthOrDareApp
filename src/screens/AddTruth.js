import React, {useState, useContext, useEffect} from 'react';
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
import {Context} from '../context/Provider'
import  Icon  from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListTruthsAndChallenges from '../components/ListTruthsAndChallenges';

  
  
  export default function AddTruth({navigation}) {
    const [inputBoxValue, setinputBoxValue] = useState();
    const {userTruths, setUserTruths} = useContext(Context)
    const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser} = useContext(Context)
    
  useEffect(() => {
    getTruthsFromUserDevice();
  },[])
  
  useEffect(() => {
    saveTruthsInUserDevice(userTruths);
  }),[userTruths]

  
  const handleAddTruths = () => {
    if (inputBoxValue == null ){
      alert("Escreva algo")
    }else{
  
    Keyboard.dismiss();
    setUserTruths([...userTruths, inputBoxValue])
    setinputBoxValue(null);
    }
  }


  const saveTruthsInUserDevice = async userTruths => {
    try {
      const stringifyTruths = JSON.stringify(userTruths)
      await AsyncStorage.setItem('truths',stringifyTruths )
    } catch (error) {
      console.log(error)
    }  }

  
  const getTruthsFromUserDevice = async () => {
    try {
      const truths = await AsyncStorage.getItem('truths');
      if (truths != null) {
        setUserTruths(JSON.parse(truths));}
    } catch (error) {
      console.log(error);}
        };
    



  const handleRemoveTruths = (truth) => {
    if(userTruths.length > 1){
      const newTruths = userTruths.filter(item => item != truth);
      setUserTruths(newTruths);
   
    }else{
      const newTruths = userTruths.filter(item => item != truth);
      setUserTruths(newTruths);
      setShowOnlyCustomsOfUser(false)
    }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.iconGoBack} onPress={()=>{ navigation.goBack()}}  >
      <View style= {{right:-15, marginVertical:20}}>
        <Icon name='arrow-back-outline' size={30} color='#3cf' > </Icon>
      </View>
      </TouchableOpacity>

      <View style={styles.truthsWrapper}>
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova suas próprias perguntas!
        </Text>
        <FlatList data={userTruths} 
        renderItem={({item}) => <ListTruthsAndChallenges remove={()=>handleRemoveTruths(item)}
        data={item}/> }>
      </FlatList>

      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTruthsWrapper}
        >
        <TextInput placeholderTextColor={'grey'}  style={styles.input} placeholder={'Adicione um desafio!'} value={inputBoxValue} onChangeText={text => setinputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleAddTruths()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
  truthsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AFADAC',
    marginBottom:20
  },
  items: {
    marginTop: 30,
  },
  writeTruthsWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'#rgb(19, 20, 24)',
    borderRadius: 60,
    borderColor: '#3cf',
    borderWidth: 1,
    width: 250,

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
  item: { 
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 20,
    backgroundColor:'#rgb(19, 20, 24)',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'  // se ficar muito grande, ele vai passar pra 
    //proxima linha, flexwrap
  },
  itemText: {
    maxWidth: '80%', // se caso não colocar isso, ele empurra o x para fora da tela 
    color: 'grey'
  },
  square: { 
    width: 24,
    height: 24,
    backgroundColor: '#3cf',
    borderRadius: 25,    
    marginRight: 15,  
  },
  boxRemove:{
    fontSize:25,
    textAlign:'center',
    color:'#3cf',}
  });
