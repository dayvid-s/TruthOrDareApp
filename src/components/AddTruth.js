import React,{useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function AddTruth() {
  const navigation = useNavigation()

  const [desafiosz, setDesafiosz] = useState()
  const [itemDesafiosz, setItemDesafio] = useState([])

  const handleAddDesafio=() =>{
    setItemDesafio([...itemDesafiosz, desafiosz])
    setDesafiosz(null) 
    console.log(itemDesafioszsz)
  }
 var  itemDesafioszsz =[...itemDesafiosz]

 
 return (
   <SafeAreaView style={styles.input} >
        <TextInput placeholder='Escolha uma verdade' value={desafiosz} 
        onChangeText={text => setDesafiosz(text)} maxLength={25} ></TextInput>
        
        <TouchableOpacity onPress={() => handleAddDesafio()} >
          <View style={styles.addWrapper} >
           
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>
        {/* / O ARRAY ESTÁ FEITO ( QUANDO VOLTAR AQUI SÓ VENHA FAZER  UM JEITO DE JUNTAR ESSE ARRAY COM OS DESAFIOS) */}
        <View><Text> {itemDesafiosz.length}</Text></View>


        <View>
          <Button title='Voltar' 
                  onPress={()=> {
                  navigation.navigate({
                    name:'PlayChallenges',
                    params: {itemDesafioszsz: itemDesafioszsz},
                    merge: true,
                })
            }}>            
          </Button>
        </View>
        <View>
          <Text>{itemDesafioszsz}</Text>
        </View>
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
        width:360,
        height: 360,
        backgroundColor:'#FFF',
        borderRadius: 360,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderWidth: 1,
      },
      addText:{

      }
})/// quando eu ovltar eu apenas tenho que arranjar um metodo de como passar dados entre telas, pra juntar
// esses 2 arrays.