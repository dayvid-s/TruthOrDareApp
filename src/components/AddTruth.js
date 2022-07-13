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
  import CustomList from './CustomList'
  

export default function App() {
  const [inputBoxValue, setInputBoxValue] = useState();
  const {userTruths, setUserTruths} = useContext(Context)
  
  
  const handleAddTruths = () => {
    if (inputBoxValue == null ){
      alert("Escreva algo")
    }else{
  
    Keyboard.dismiss();
    setUserTruths([...userTruths, inputBoxValue])
    setInputBoxValue(null);
  }}
  
  const handleRemoveTruths = (index) => {
    let itemsCopy = [...userTruths];
    itemsCopy.splice(index, 1);
    setUserTruths(itemsCopy)
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
        <Text style={styles.sectionTitle}>Seja criativo(a), crie e remova suas próprias perguntas!
        </Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            userTruths.map((item, index) => {
              return (
                // <TouchableOpacity key={index}  onPress={() => handleRemoveTruths (index)}>
                  <CustomList text={item} key = {index}  remove={handleRemoveTruths} /> 
                // </TouchableOpacity>
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
        <TextInput style={styles.input} placeholder={'Adicione uma pergunta instigante!'} value={inputBoxValue} onChangeText={text => setInputBoxValue(text)} />
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
});