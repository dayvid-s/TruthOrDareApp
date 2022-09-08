import React, {useState, useContext, useEffect} from 'react';

import { KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    Alert, 
    FlatList
    } from 'react-native';

export default (props)=>{
    
    // const removePlayer = (idItem) => {
    //     const newItem = props.bigData.filter(item => item.id != idItem);
    //     props.setItem(newItem);
    // }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'
        >
            <View style={styles.inputBoxValuesWrapper}>
            <View style={styles.items}>
            <View  style={styles.item}>
            <View   style={styles.itemLeft}>
                <Text    style={styles.itemText}>{props.data}</Text>
            </View>
            <View  >
                <TouchableOpacity onPress={props.remove} style={{padding: 10}}>
                <Text style={styles.boxRemove} >X</Text>
                </TouchableOpacity>
            </ View>
            </View>
            </View>
            </View>
        </ScrollView>
        )
    }    
    const styles = StyleSheet.create({
        container: {
      flex: 1,
      backgroundColor: (`#000`),
    },
    advance:{
      justifyContent: 'center',
      alignItems: 'center',
      flex:2,
      marginRight:'95%'
    },
    inputBoxValuesWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      textAlign:'center',
      fontSize: 30,
      fontWeight: '400',
      color: '#6495ed',
      flex: 1,
      minWidth:'90%'
    },
    items: {
      marginTop: 30,
    },
    writeinputBoxValueWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderColor: 'blue',
      borderWidth: 3,
      width: 250,
      backgroundColor:'#444444'
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addText: {},
    item: {
    //   backgroundColor: '#FFF',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      borderColor: 'black',
      borderWidth:2
      
    
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    itemText: {
      maxWidth: '80%',
      fontSize:25,
      width: 190,
      left:'220%' ,
      // textAlign: 'center',
      // color:'#333',
      },boxRemove:{
    fontSize:25,
    textAlign:'center',
    color:'#6495ed',
    }
  });
