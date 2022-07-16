import { View, Text } from 'react-native'
import React from 'react'

const CircleForIcons = (props) => {
  return (
    <View style={{borderWidth:1 , borderRadius:25, backgroundColor:'blue',
    width: 50,height: 50
    }} >
        <Text>
    {props.icon}

        </Text>
    </View>
  )
}

export default CircleForIcons