'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight} = ReactNative;
const styles = require('./styles');

class ProfileHeading extends Component {
  render(){
    return(
      <View>
        <View style = {styles.profileHeading}>
          <Text style = {styles.profileHeadingText}>{this.props.profileHeadingText}</Text>
        </View>
      </View>
    );
  }
}

module.exports = ProfileHeading;
