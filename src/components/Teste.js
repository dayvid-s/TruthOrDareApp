// import React, {useState, useContext} from 'react';
// import { KeyboardAvoidingView,
//    StyleSheet,
//    Text,
//    View,
//    TextInput,
//    TouchableOpacity,
//    Keyboard,
//    ScrollView 
//   } from 'react-native';
// import {Context} from '../../context/Provider'


// export default function Teste() {
//   const [inputBoxValue, setInputBoxValue] = useState();
//   // const {userChallenges, setUserChallenges} = useContext(Context);
//   const {userChallenges, setUserChallenges} = useContext(Context)
    
//   const handleAddinputBoxValue = () => {
//     Keyboard.dismiss();
//     setUserChallenges([...userChallenges, inputBoxValue])
//     setInputBoxValue(null);
//   }
//   console.log(userChallenges)
//   const completeinputBoxValue = (index) => {
//     let itemsCopy = [...userChallenges];
//     itemsCopy.splice(index, 1);
//     setUserChallenges(itemsCopy)
//   }

//   return (
//     <View style={styles.container}>
//       {/* Added this scroll view to enable scrolling when list gets longer than the page */}
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1
//         }}
//         keyboardShouldPersistTaps='handled'
//       >

//       {/* Today's inputBoxValues */}
//       <View style={styles.inputBoxValuesWrapper}> 
//         <Text style={styles.sectionTitle}>Crie seus desafios!</Text>
//         <View style={styles.items}>
//           {/* This is where the inputBoxValues will go! */}
//           {
//             userChallenges.map((item, index) => {
//               return (
//                 <TouchableOpacity key={index}  onPress={() => completeinputBoxValue(index)}>

//                   <View style={styles.item}>
//                     <View style={styles.itemLeft}>
//                       <View style={styles.square}></View>
//                       <Text style={styles.itemText}>{item}</Text>
//                     </View>
//                     <View style={styles.circular}></View>
//                   </View>
                
//                 </TouchableOpacity>
//               )
//             })
//           }
//         </View>
//       </View>
        
//       </ScrollView>

//       {/* Write a inputBoxValue */}
//       {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.writeinputBoxValueWrapper}
//       >
//         <TextInput style={styles.input} placeholder={'Write a inputBoxValue'} value={inputBoxValue} onChangeText={text => setInputBoxValue(text)} />
//         <TouchableOpacity onPress={() => handleAddinputBoxValue()}>
//           <View style={styles.addWrapper}>
//             <Text style={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',
//   },
//   inputBoxValuesWrapper: {  
//     // invólucro, é um invólucro das tarefas, oq tá em torno de todas as tarefas.
// // Aprenda a pronunciar
// // aquilo que serve ou é usado. 
// // para envolver, cobrir; envoltório, envólucro, cobertura, revestimento, involutório.
// // MORFOLOGIA BOTÂNICA
// // conjunto de brácteas que circunda e envolve, total ou 
// // parcialmente, uma flor ou um grupo de flores.

//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {   // titulo da seção, aquele que era 'today inputBoxValues '
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   items: {    // essa aqui vai envolver os desafios, já dentro do invólucro, e dentro do conteiner
//     marginTop: 30, //isso faz com que ele se afasta da view de cima, a titulo da seção
//   },
//   writeinputBoxValueWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     borderColor: '#C0C0C0', // aquela bordinha cinza ao redor do quadrado de input
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 60,   //isso aqui fez ficar circular
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#C0C0C0', 
//     borderWidth: 1,  
//   },
//   item: { //envolve as tarefas, todas... é aquele espaço branco atrás, um padding
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', //esse justify content tá basicamente
//       // empurrando o botão circular para o extremidade oposta
//     marginBottom: 20,
//   },
//   itemLeft: { // as tarefas estarão aqui
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'  // se a tarefa ficar muito grande, ele vai passar pra 
//               //proxima linha, flexwrap
//   },
//   square: { //  o quadradrado ali do lado esquerdo
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,   // era um azul bem forte, mas alterou com a opacidade, teste dps.
//     borderRadius: 5,    // isso fez o quadrado ficar mais um pouco redondo rsrs teste ao extremo dps
//     marginRight: 15, // aqui afastou mais o item de texto para a direita 
//   },
//   itemText: {
//     maxWidth: '80%', // se caso não colocar isso, ele empurra o circulo para fora da tela 
//   },
//   circular: {   // bolinha do lado direito
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },  
// });