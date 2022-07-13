import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomList = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.remove}> 
        <Text style={styles.boxRemove}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: { //envolve as tarefas, todas... é aquele espaço branco atrás, um padding
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', //esse justify content tá basicamente
      // empurrando o botão circular para o extremidade oposta
    marginBottom: 20,
  },
  itemLeft: { // as tarefas estarão aqui
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'  // se a tarefa ficar muito grande, ele vai passar pra 
              //proxima linha, flexwrap
  },
  square: { //  o quadradrado ali do lado esquerdo
    width: 24,
    height: 24,
    backgroundColor: '#ff09de',
    // opacity: 0.4,   // era um azul bem forte, mas alterou com a opacidade, teste dps.
    borderRadius: 25,    // isso fez o quadrado ficar mais um pouco redondo rsrs teste ao extremo dps
    marginRight: 15, // aqui afastou mais o item de texto para a direita 
  },
  itemText: {
    maxWidth: '80%', // se caso não colocar isso, ele empurra o circulo para fora da tela 
  },
  boxRemove:{
    fontSize:25,
    textAlign:'center',
    color:'#F80EC8',
  },
});

export default CustomList