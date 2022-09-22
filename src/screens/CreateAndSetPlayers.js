import React, {useState, useContext, useEffect} from 'react';
import { KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert, 
  FlatList,
  StatusBar
  } from 'react-native';
import { Context } from '../context/Provider';

import Icon  from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListUsers from './../components/ListUsers';

export default function CreateAndSetPlayers ({navigation}) {
  const [inputBoxValue, setinputBoxValue] = useState('');
  const {players, setPlayers} = useContext(Context)

  useEffect(() => {
    getPlayersFromUserDevice();
  }, []);

  useEffect(() => {
    savePlayersInDevice(players);
  }, [players])

  const advance = () =>{    
    if(players.length >=2){
      navigation.navigate('InitialScreen')}
      else{ 
        Alert.alert('Erro','Você precisa de no minímo 2 jogadores.')}}

  const handleSavePlayer = () => {
    if(inputBoxValue == '' ){
      Alert.alert('Erro','Digite alguma coisa')}
    else{  
      setPlayers([...players, inputBoxValue])
      setinputBoxValue(null);}         
      Keyboard.dismiss();
    }
    
  const removePlayer = player => {
    const newPlayer = players.filter(item => item != player);
    setPlayers(newPlayer);
  };

  const savePlayersInDevice = async players => {
    try {
      const stringifyPlayers = JSON.stringify(players);
      await AsyncStorage.setItem('players', stringifyPlayers);
    } catch (error) {
        console.log(error);};}
              
  const getPlayersFromUserDevice = async () => {
    try {
      const players = await AsyncStorage.getItem('players');
      if (players != null) {
        setPlayers(JSON.parse(players));
      }
    } catch (error) {
      console.log(error);
    }};

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"black"} ></StatusBar>
      <View style={{flexDirection:'row',  marginTop:30}}>
        <Text style={styles.sectionTitle}>Jogadores</Text>
        <View style={styles.advance}>
        <TouchableOpacity onPress={advance}>
          {players.length>1 &&
            <Icon   name='chevron-right' size={42} color='#3cf'/>}
        </TouchableOpacity>
        </View>
      </View>

      <FlatList data={players} 
        renderItem={({item}) => <ListUsers remove={()=>removePlayer(item)}
        data={item}/> }>
      </FlatList>

      <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeinputBoxValueWrapper}>
        <TextInput placeholderTextColor={'grey'}  style={styles.input} placeholder={'Adicione os jogadores...'} 
          value={inputBoxValue} onChangeText={text =>  setinputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleSavePlayer()}>
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
    backgroundColor: '#000',
  },
  advance:{
    padding: 3,
    paddingRight:15,
    marginRight:'90%',
  },
  sectionTitle: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: '400',
    color: '#3cf',
    flex: 1,
    minWidth:'90%',
    marginBottom:100,
  },
  writeinputBoxValueWrapper: {
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
    borderWidth: 3,
    width: 250,
    backgroundColor:'#rgb(19, 20, 24)',
    color:'grey'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#3cf',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
