import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon  from 'react-native-vector-icons/Octicons';

export default function ({data,edit,remove}){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'>
            <View style={styles.wrapperOfAllList}>
                <View style={styles.items}>
                    <Text style={styles.itemText}>{data}</Text>
                    
                    <TouchableOpacity onPress={edit} style={{padding: 10}}>
                      <Icon name='pencil'color={'#2980b9'} size={21} ></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={remove} style={{padding: 10}}>
                      <Text style={styles.boxRemove} >X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        )}    
const styles = StyleSheet.create({
  wrapperOfAllList: {
    marginVertical:5,
    marginTop:10,
    paddingTop: 5,
    paddingHorizontal: 20,
    backgroundColor:'rgb(19, 20, 24)',
    borderColor: '#3cf',
    marginRight:20,
    marginLeft:20,
    borderRadius:16,
  },
  items: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderColor: '#3cf',
    },
  itemText: {
    maxWidth: '80%',
    fontSize:23,
    marginLeft:5,
    color: '#3cf',
    flex:1
    },
  boxRemove:{
    fontSize:25,
    textAlign:'center',
    marginRight:-20,
    color:'#3cf'
  }});
