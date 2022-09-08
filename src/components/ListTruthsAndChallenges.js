import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default (props)=>{
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'>
            <View style={styles.wrapperOfAllList}>
                <View style={styles.square}></View>
                <View  style={{flex:1}}>
                    <Text style={styles.itemText}>{props.data}</Text>
                </View>
                <TouchableOpacity onPress={props.remove} style={{padding: 10}}>
                    <Text style={styles.boxRemove} >X</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        )}    
const styles = StyleSheet.create({
    wrapperOfAllList: {
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal: 20,
        backgroundColor:'rgb(19, 20, 24)',
        borderWidth:3,
        borderRadius:16,
        flexDirection:'row',
        alignItems:'center'
    },
    boxRemove:{
        textAlign:'center',
        color: 'grey',
        color:'#3cf',
        alignSelf:'flex-end',
        fontSize:25,
        marginRight:-10
    },
    itemText: {
        color: 'grey',
    },
    square: { 
        width: 24,
        height: 24,
        backgroundColor: '#3cf',
        borderRadius: 25,    
        marginRight: 15,  
    },});
