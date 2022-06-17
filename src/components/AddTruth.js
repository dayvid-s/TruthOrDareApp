import React,{useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddTruth() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask=() =>{
    setTaskItems([...taskItems, task])
    setTask(null)
    console.log('esse será o array do set task items')
    console.log(taskItems)
 
    console.log(task)
    console.log('esse foi o array do taks ')
  }
 return (
   <SafeAreaView style={styles.input} >
        <TextInput placeholder='Escolha uma verdade' value={task} onChangeText={text => setTask(text)} maxLength={25} ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper} >
           
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>
        {/* / O ARRAY ESTÁ FEITO ( QUANDO VOLTAR AQUI SÓ VENHA FAZER  UM JEITO DE JUNTAR ESSE ARRAY COM OS DESAFIOS) */}
        <View><Text> {taskItems.length}</Text></View>
   </SafeAreaView>
 );
}
const styles= StyleSheet.create({
    input:{
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius:4,
    height:40,
    marginHorizontal:20,
    paddingLeft:10,
      },
      addWrapper:{
        width:60,
        height: 60,
        backgroundColor:'#FFF',
        borderRadius: 60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderWidth: 1,
      },
      addText:{

      }
})