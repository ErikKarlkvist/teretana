'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight} = ReactNative;
const styles = require('./styles');

class ProfileHeading extends Component {
  render(){
    return(
      <View>
        <View style = {styles.menuBar}></View>
        <View style = {styles.titleBar}>
          <Text style = {styles.titleBarText}>{this.props.titleBarText}</Text>
        </View>
      </View>
    );
  }
}

module.exports = ProfileHeading;
