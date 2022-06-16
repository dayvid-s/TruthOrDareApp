import { View, Text, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'

const desafios =['sup', 'jack', 'sub', 'fuc','szzz', 'msmmss','sup', 'jack', 'sub', 'fuc','szzz', 'msmmss'
,'sup', 'jack', 'sub', 'fuc','szzz', 'msmmss','sup', 'jack', 'sub', 'fuc','szzz', 'msmmss',
'sup', 'jack', 'sub', 'fuc','szzz', 'msmmss','sup', 'jack', 'sub', 'fuc','szzz', 'msmmss'
]
const shuffle=()=>{
var currentIndex = desafios.length, temporaryValue, randomIndex
while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = desafios[currentIndex];
    desafios[currentIndex] = desafios[randomIndex];
    desafios[randomIndex] = temporaryValue;
    console.log(desafios)
}
}
 
export default function teste() {
    const [desafios, mudardesafio] = useState(shuffle(desafios))
     
    return (
    <View>
        
        <TouchableHighlight>
          <Text> 
          {console.log(desafios)}
          </Text>
         
        </TouchableHighlight>
    </View>
  )
}