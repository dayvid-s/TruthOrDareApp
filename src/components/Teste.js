import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Dimensions, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';


export default function AddDare() {
    const [inputBoxValue, setInputBoxValue] = useState('')

    const addItemToList = async ()=>{
        try{
          await AsyncStorage.setItem("itemList", inputBoxValue)
        setInputBoxValue('')
          alert("Data is added")
        }catch(err){
            console.log(err);
        }
    }
    return (
    <View style={styles.container}>
        <TextInput
    style={styles.inputBox} 
    value={inputBoxValue}
    placeholder="Enter data"
    onChangeText ={value =>setInputBoxValue(value)} />
   
        <TouchableOpacity style={styles.addButton} onPress={()=>addItemToList()}>
            <Text style={{color:'#fff'}} >Add</Text>
        </TouchableOpacity>
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