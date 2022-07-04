import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Dimensions, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

export default function AddDare() {
    const navigation = useNavigation()

    const [inputBoxValue, setInputBoxValue] = useState("")
    const [storageDareList, setStorageDareList] =useState([])

    useEffect( ()=>{
        async function tempFunction (){ 
        await getItemList()
        }

        tempFunction()

        return()=>{} 
    }, [])
    
    const addItemToList = async ()=>{
        try{
            storageDareList.push(inputBoxValue)


            const output= JSON.stringify(storageDareList)

            await AsyncStorage.setItem("itemList", output)
            setInputBoxValue('')


            alert("Data is added")
        } catch(err){
            console.log(err)
        }
    }
    const getItemList = async()=>{
        try{
          const data = await AsyncStorage.getItem("itemList")
          
          const output = JSON.parse(data)

          setStorageDareList(output)    

        }catch (err) { 
            console.log(err)
        }
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
                  navigation.navigate({
                    name:'PlayChallenges' 
                })
            }}>            
          </Button>
        </View>
            <Text>{storageDareList}</Text>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:30}} >Array List</Text>
   
   {storageDareList.map((item,index) =>{
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