'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Console, Image} = ReactNative;
const styles = require('./styles');
const constants = styles.constants;
class ListItem extends Component {
  constructor(){
    super();
    this.state = {
      jobColourStyle: styles.greenJob,
      jobEarningTextStyle: styles.jobEarningTextGreen,
      imageSrc: require('./images/greenBorder.png')
    }
  }

  render(){
    return(
        <TouchableOpacity underlayColor = {this.props.item.colour} onPress = {this.props.onPress}>
          <View style = {this.state.jobColourStyle}>
            <View style = {styles.jobText}>
              <Text style = {styles.jobOverviewText}>{this.props.item.overview}</Text>
              <Text style = {styles.jobDateText}>Senast klar: {this.props.item.date}</Text>
            </View>
            <View style = {styles.jobEarningContainer}>
              <Image source={this.state.imageSrc} style = {styles.earningBorder}>
                <Text style = {this.state.jobEarningTextStyle}>{this.props.item.earning}kr</Text>
              </Image>
            </View>
          </View>
        </TouchableOpacity>
    );
  }

  componentWillMount(){
    if(this.props.item.colour == 'blue'){
      this.setState({
        jobColourStyle: styles.blueJob,
        jobEarningTextStyle: styles.jobEarningTextBlue,
        imageSrc: require('./images/blueBorder.png')
      });
    }
  }
}

module.exports = ListItem;
