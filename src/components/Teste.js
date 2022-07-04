import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


export default function Teste() {
    const [Desafio, setDesafio] = useState('')
    const [ArrayDesafio, setArraydesafio]= useState([])

    const handleAddDesafio = () => {

        setArraydesafio([...ArrayDesafio, Desafio])
        // aqui ela copia qualquer coisa que ja estava no arraydesafio , e 
        //depois une com o estado Desafio
        setDesafio(null)

        // Com a sintaxe de espalhamento isso se torna [Note, no entanto, que isso cria um novo
        // arr1 array. Ao contrário de Array.unshift, isso não modifica o array original arr1 array]:
        // var arr1 = [0, 1, 2];
        // var arr2 = [3, 4, 5];
        // arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
    }
  return (
    <View style={{marginVertical:20, marginLeft:10, marginRight:10 }}>
      <Text style={{marginVertical:20}} >Teste</Text>
      
      <TextInput style={{borderColor:'#FFF', backgroundColor:'#FFF', marginVertical:30}} 
      onChangeText={text => setDesafio(text)} 
      value={Desafio}
      ></TextInput>



        <Button
        style={{marginVertical:20}} 
        title='Add' onPress={handleAddDesafio}> </Button>
      <Text
      style={{marginVertical:20}} >
        Valor do text= {ArrayDesafio}
      </Text>
      
<Text style={{fontSize:20, fontWeight:'bold', marginBottom:30}} >Array List</Text>

   {ArrayDesafio.map((item,index) =>{
    return<Text style={{marginVertical:10}} key={index}>{item}</Text>


   })}
    </View>
  )
}