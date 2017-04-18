'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableOpacity, StatusBar} = ReactNative;
const styles = require('./styles');
const constants = styles.constants;
class Header extends Component {
  constructor(){
    super();
    this.backClick = this.backClick.bind(this);
    this.state = {
      exitButton: <View style = {styles.exitButton}></View>
    }
  }
  render(){
    if(this.props.activeBack){
      this.state.exitButton = <TouchableOpacity onPress = {this.backClick} underlayColor = {constants.greyMedium} style = {styles.exitButton}><Text style = {{color:'black', fontSize:15}}>X</Text></TouchableOpacity>
    }
    return(
      <View>
        <StatusBar
           backgroundColor={constants.greyStrong}
           barStyle="default"
           statusBarHidden='false'
         />
        <View style = {styles.titleBarContainer}>
          {this.state.exitButton}
          <View style = {styles.titleBar}>
            <Text style = {styles.titleBarText}>{this.props.titleBarText}</Text>
          </View>
          <View style = {styles.titleBar}/>
        </View>
      </View>
    );
  }

  backClick(){
    this.props.navigator.pop();
  }
}

module.exports = Header;
