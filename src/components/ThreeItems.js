import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/AntDesign';

export default function ThreeItems(props) {
  return (
      <View style={styles.container}>
        <View style={styles.playersIcon}>
          <TouchableOpacity onPress={props.users}  >
            <Icon name='addusergroup' size={30} color='blue' ></Icon>
          </TouchableOpacity>
          <Text    style={styles.itemText}>{props.text}</Text>
        </View>
        <View   >
          <TouchableOpacity  >
            <Icon onPress={props.settings} name='menufold' size={30} color='blue' ></Icon>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: (`#000000`),
     marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playersIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
  itemText: {
    maxWidth: '80%',
    fontSize:30,
    width: 190,
    textAlign:'center',
    left: 60,
    color:('#fa29de'),
  }});