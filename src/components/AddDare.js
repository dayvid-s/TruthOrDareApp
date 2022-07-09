import React, {useState, useContext} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Dimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Context} from '../../context/Provider'

export default function AddDare() {
    const navigation = useNavigation()
    const [inputBoxValue, setInputBoxValue] = useState("")
    
    const{userChallenges, setUserChallenges} =useContext(Context)
    
    const addItemToList = ()=>{

        setUserChallenges([...userChallenges, inputBoxValue])
        setInputBoxValue(null)
        console.log(userChallenges)
    } 
    return (
   <View style={styles.container} >
   <TextInput
    style={styles.inputBox} 
    value={inputBoxValue}
    placeholder="Enter Dare"
    onChangeText ={(value) =>setInputBoxValue(value)} />
   <TouchableOpacity style={styles.addButton} onPress={() => addItemToList()} >
        <Text style={{color:'#fff'}}>Add</Text>
   </TouchableOpacity>
    <View style={styles.list}>
        
    <View>
          <Button title='Voltar' 
                  onPress={()=> {
                  navigation.goBack()
            }}>            
          </Button>
        </View>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:30}} >Array List</Text>
   
   {userChallenges.map((item,index) =>{
    return<Text style={{marginVertical:10}} key={index}>{item}</Text>
    
   })}  
    </View>
   </View>
 );
}
const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inputBox:{
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 10,
        marginHorizontal: 8,
    }, 
    addButton:{
    width: width -20,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    alignItems: 'center',
    padding:10
    },
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})