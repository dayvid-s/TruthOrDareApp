  import React, {useState, useContext} from 'react';
import { KeyboardAvoidingView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   Keyboard,
   ScrollView,
   Alert 
  } from 'react-native';
import { Context } from '../../context/Provider';
import Icon  from 'react-native-vector-icons/Octicons';

export default function Appe({navigation}) {
  const [inputBoxValue, setInputBoxValue] = useState('');
  const {players, setPlayers} = useContext(Context);


  const advance = () =>{
    if(players.length >=2){
      navigation.navigate('InitialScreen')}
      else{ 
        Alert.alert('Erro','Você precisa de no minímo 2 jogadores.')}}


  const handleSetPlayers = () => {
    if(inputBoxValue == '' ){
      Alert.alert('Erro','Digite alguma coisa')}
      else{  
        Keyboard.dismiss();
        setPlayers([...players, inputBoxValue])
        setInputBoxValue(null);}
  }

  const complete = (index) => {
    let itemsCopy = [...players];
    itemsCopy.splice(index, 1);
    setPlayers(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', padding:20, marginTop:20}}>
        <Text style={styles.sectionTitle}>Jogadores:</Text>
       <TouchableOpacity onPress={advance}>
        <View style={styles.advance}>
          <Icon name='chevron-right' size={38} color='#ff09de'/>
           {/* ionicons é brabo, 100% completo, ao inves do ant design
            feather também é brabo, mas nao chega no nivel de ionicos
            <Text style={{  alignSelf:'center',color:('#De2674')}} >______________</Text>
            e fontisto também é brabo
           */}
        </View>
       </TouchableOpacity>
      </View>
            
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's inputBoxValues */}
      <View style={styles.inputBoxValuesWrapper}>
        <View style={styles.items}>
          {/* This is where the inputBoxValues will go! */}
          {
            players.map((item, index) => {
              return (
                <View key={Math.random()*23} style={styles.item}>
                  <View  key={Math.random()*23} style={styles.itemLeft}>
                    <Text  key={Math.random()*23}  style={styles.itemText}>{item}</Text>
                  </View>
                  <View  key={Math.random()*23} >
                    <TouchableOpacity style={{padding: 10}}  key={index}  onPress={() => complete(index)}>
                      <Text style={styles.boxRemove} key={Math.random()*23}>X</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a inputBoxValue */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeinputBoxValueWrapper}
      >
        <TextInput style={styles.input} placeholder={'Quem irá brincar?'} value={inputBoxValue} onChangeText={text => setInputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleSetPlayers()}>
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
    backgroundColor: (`#000000`),

  },
  advance:{
    left: 130 ,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBoxValuesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    left:80,
    fontSize: 33,
    fontWeight: '400',
    color: '#ff09de'
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
    borderColor: '#F80EC8',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F80EC8',
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
    borderColor: '#F80EC8',
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
    left:20 ,
    // textAlign: 'center',
    // color:'#333',
    },boxRemove:{
  fontSize:25,
  textAlign:'center',
  color:'#F80EC8',
  }
});