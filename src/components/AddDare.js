import React, {useState, useContext} from 'react';
import { KeyboardAvoidingView,
  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView 
  } from 'react-native';
  import {Context} from '../../context/Provider'
  

export default function App({navigation}) {
  const [inputBoxValue, setInputBoxValue] = useState();
  const {userChallenges, setUserChallenges} = useContext(Context)
  const {showOnlyCustomsOfUser, setShowOnlyCustomsOfUser} = useContext(Context)

  const handleAddChallenges = () => {
    if (inputBoxValue == null ){
      alert("Escreva algo")
    }else{
  
    Keyboard.dismiss();
    setUserChallenges([...userChallenges, inputBoxValue])
    setInputBoxValue(null);
    }
  }
  const handleRemoveChallenges = (index) => {
    if(userChallenges.length > 1){
      let itemsCopy = [...userChallenges];
      itemsCopy.splice(index, 1);
      setUserChallenges(itemsCopy)
    }else{
      let itemsCopy = [...userChallenges];
      itemsCopy.splice(index, 1);
      setUserChallenges(itemsCopy)
      setShowOnlyCustomsOfUser(false)
    }
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova seus próprios desafios!
        </Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            userChallenges.map((item, index) => {
              return (
                    <View key={Math.random()*3} style={styles.item}>
                      <View key={Math.random()*3} style={styles.itemLeft}>
                      <View key={Math.random()*3} style={styles.square}></View>
                      <Text key={Math.random()*3} style={styles.itemText}>{item}</Text>
                    </View>
                    <TouchableOpacity key={index} onPress={()=>handleRemoveChallenges(index)}> 
                      <Text key={Math.random()*3} style={styles.boxRemove}>X</Text>
                    </TouchableOpacity>
                  </View>
                )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Adicione um desafio!'} value={inputBoxValue} onChangeText={text => setInputBoxValue(text)} />
        <TouchableOpacity onPress={() => handleAddChallenges()}>
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
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AFADAC'
 
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
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
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#F315EF',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F80EC8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {},
  item: { //envolve as tarefas, todas... é aquele espaço branco atrás, um padding
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', //esse justify content tá basicamente
      // empurrando o botão circular para o extremidade oposta
    marginBottom: 20,
  },
  itemLeft: { // as tarefas estarão aqui
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'  // se a tarefa ficar muito grande, ele vai passar pra 
              //proxima linha, flexwrap
  },
  square: { //  o quadradrado ali do lado esquerdo
    width: 24,
    height: 24,
    backgroundColor: '#ff09de',
    // opacity: 0.4,   // era um azul bem forte, mas alterou com a opacidade, teste dps.
    borderRadius: 25,    // isso fez o quadrado ficar mais um pouco redondo rsrs teste ao extremo dps
    marginRight: 15, // aqui afastou mais o item de texto para a direita 
  },
  itemText: {
    maxWidth: '80%', // se caso não colocar isso, ele empurra o circulo para fora da tela 
  },
  boxRemove:{
    fontSize:25,
    textAlign:'center',
    color:'#F80EC8',}
});