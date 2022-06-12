import React, { Component } from 'react';
import { Text, View } from 'react-native';

    

export default class desafios extends Component{
    state= {
        ChallenguesDone: ['What would you like to do with a partner if you could erase her memory?'
        ,'eae  man'],
        ChallenguesUndone:['']
    }
  alternar=()=>{
    this.setState({
        Challengues: this.state.Challengues?'' : 'suruba'    
    })
  }
    render(){
        return(
            <View>
               <Text style={{fontSize:28,textAlign:'center'}} >{ this.state.ChallenguesDone[1]} </Text>
            </View>
        )
    }
}