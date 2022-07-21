import { View, Text } from 'react-native'
import React from 'react'

const CircleForIcons = (props) => {
  return (
    <View style={styles.wrapperOfIcons } >
            
    <View style={{left:-30}}  >
      <TouchableOpacity onPress={reloadChallenges}  >
        <View style={styles.bottomIcons} >
            <Icon name='reload1' size={30} color='white' />
        </View>
      </TouchableOpacity>
    </View>
    </View>
    )
}
const style = StyleSheet.create({
  wrapperOfIcons:{
    flexDirection:'row',
    alignSelf:'center', 
    justifyContent:'space-between'  
  },
})
export default CircleForIcons

