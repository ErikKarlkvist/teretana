'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight, TouchableOpacity} = ReactNative;
const styles = require('./styles');
const constants = styles.constants;
class ProfileItem extends Component {
  render(){
    return(
        <TouchableOpacity underlayColor = {constants.greyMedium} onPress = {this.props.onClick}>
          <View style = {styles.profileItem}>
            <Text style = {styles.profileItemContentText}>{this.props.itemContent}</Text>
            <Text style = {styles.profileItemContentTypeText}>{this.props.itemContentType}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

module.exports = ProfileItem;
