import React, {useState, useContext, useEffect} from 'react';
import { KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert, 
  FlatList
  } from 'react-native';
import { Context } from '../../context/Provider';
import Icon  from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from './../components/ListItem';

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
      // const newPlayer =[{
      //   id : Math.random(),
      //   player: inputBoxValue,
      //   }]
      setPlayers([...players, inputBoxValue])
      setinputBoxValue(null);}         
      Keyboard.dismiss();
    }

    
  const removePlayer = challengeItem => {
    const newPlayer = players.filter(item => item != challengeItem);
    setPlayers(newPlayer);
  };

  // const removePlayer = (item) => {
  //   // let itemsCopy = [...players];
  //   // itemsCopy.splice(index, 1);
  //   // setPlayers(itemsCopy)}
  //           console.log(item)}
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
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',  marginTop:20}}>
        <Text style={styles.sectionTitle}>Jogadores</Text>
        <TouchableOpacity onPress={advance}>
          <View style={styles.advance}>
          
          {players.length>1 &&
            <Icon name='chevron-right' size={42} color='#6495ed'/>
          }
          
            {/* ionicons é brabo, 100% completo, ao inves do ant design
              feather também é brabo, mas nao chega no nivel de ionicos
              <Text style={{  alignSelf:'center',color:('#De2674')}} >______________</Text>
              e fontisto também é brabo
            */}
          </View>

        </TouchableOpacity>
      </View>
            
      {/* <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled' */}
      {/* > */}
      {/* <View style={styles.inputBoxValuesWrapper}> */}
        {/* <View style={styles.items}>
          {
            players.map((item, index) => {
              return (
                <View key={Math.random()*23} style={styles.item}>
                  <View  key={Math.random()*23} style={styles.itemLeft}>
                    <Text  key={Math.random()*23}  style={styles.itemText}>{item}</Text>
                  </View>
                  <View  key={Math.random()*23} >
                    <TouchableOpacity style={{padding: 10}}  key={index}  onPress={() => removePlayer(index)}>
                      <Text style={styles.boxRemove} key={Math.random()*23}>X</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
        </View> */}
        {console.log(players)}
        <FlatList data={players} 
      renderItem={({item}) => <ListItem remove={()=>removePlayer(item)} data={item}
      // choice={players.id 
      /> 
      } ></FlatList>
      {/* </View> */}
        

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeinputBoxValueWrapper}
      >
                <TextInput style={styles.input} placeholder={'Nome do jogador'} 
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
    justifyContent: 'center',
    alignItems: 'center',
    flex:2,
    marginRight:'95%'
  },
  inputBoxValuesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    textAlign:'center',
    fontSize: 30,
    fontWeight: '400',
    color: '#6495ed',
    flex: 1,
    minWidth:'90%'
  },
  items: {
    marginTop: 30,
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
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 3,
    width: 250,
    backgroundColor:'#444444'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {},
  item: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderColor: 'blue',
    borderWidth:2
    
  
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '80%',
    fontSize:25,
    width: 190,
    left:'220%' ,
    // textAlign: 'center',
    // color:'#333',
    },boxRemove:{
  fontSize:25,
  textAlign:'center',
  color:'#6495ed',
  }
});



