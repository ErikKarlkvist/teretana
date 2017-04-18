'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight, Image} = ReactNative;
const styles = require('./styles');
const Header = require('./Header');
const Footer = require('./Footer');
const ProfileItem = require('./ProfileItem');
class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <View style = {styles.noResult}><Text style = {styles.jobDateText}>Inget resultat</Text></View>
    };
  }
  render(){
    return(
      <View  style = {styles.container}>
        <Header titleBarText = 'Mina jobb'/>
        <View style = {styles.content}>
          <Image source={require('./images/bonsai_logo.png')} style = {styles.backgroundImage}>
            <Text style = {styles.myJobtext}> Aktiva </Text>
            <Text style = {styles.myJobtext}> Avslutade </Text>
            {this.state.content}
          </Image>
        </View>
        <Footer currentlyActive = 'MyJobs' navigator = {this.props.navigator}/>
      </View>
    );
  }
}

module.exports = MyJobs;
