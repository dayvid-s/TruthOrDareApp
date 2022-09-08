import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default (props)=>{
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'>
            <View style={styles.inputBoxValuesWrapper}>
                <View style={styles.items}>
                    <Text style={styles.itemText}>{props.data}</Text>
                    <TouchableOpacity onPress={props.remove} style={{padding: 10}}>
                        <Text style={styles.boxRemove} >X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        )}    
const styles = StyleSheet.create({
  inputBoxValuesWrapper: {
    marginVertical:5,
    marginTop:10,
    paddingTop: 5,
    paddingHorizontal: 20,
    backgroundColor:'rgb(19, 20, 24)',
    borderColor: '#3cf',
    borderWidth:3,
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
      color: 'grey'
    },
    boxRemove:{
      fontSize:25,
      textAlign:'center',
      color:'#3cf',
      marginRight:-20,
      color: 'grey',
    }});
