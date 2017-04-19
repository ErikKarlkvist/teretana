'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight, ScrollView, Console} = ReactNative;
const styles = require('./styles');
const Header = require('./Header');
const Footer = require('./Footer');
const ProfileHeading = require('./ProfileHeading');
const ProfileItem = require('./ProfileItem');
const constants = styles.constants;
import Communications from 'react-native-communications';

class Profile extends Component {
  constructor(){
    super();
    this.onPressBasic = this.onPressBasic.bind(this);
    this.onPressCall = this.onPressCall.bind(this);
    this.onPressMail = this.onPressMail.bind(this);
    this.state = {
      contactNumber: '031-3607660',
      contactMail: 'kontakt@bonsai.se'
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <Header titleBarText = 'Profil'/>
        <ScrollView style = {[styles.content, {backgroundColor: constants.greyLight}]}>
          <ProfileHeading profileHeadingText='DIN INFO'/>
          <ProfileItem onClick = {this.onPressBasic} itemContent='Gibraltargatan, Göteborg, Sverige' itemContentType='Adress'/>
          <ProfileItem onClick = {this.onPressBasic} itemContent='+46705675328' itemContentType='Telefonnummer'/>
          <ProfileItem onClick = {this.onPressBasic} itemContent='erikkarlkvist95@gmail.com' itemContentType='Email'/>
          <ProfileHeading profileHeadingText='KONTAKTA OSS'/>
          <ProfileItem onClick = {this.onPressCall} itemContent={this.state.contactNumber} itemContentType='Ring'/>
          <ProfileItem onClick = {this.onPressMail} itemContent={this.state.contactMail} itemContentType='Maila'/>
          <ProfileHeading profileHeadingText='ÖVRIGT'/>
          <TouchableHighlight underlayColor = {constants.greyMedium} onPress = {this.onPressBasic}>
            <View style = {styles.logoutContainer}>
              <Text style = {styles.profileItemContentText}>Logga ut</Text>
            </View>
          </TouchableHighlight>
          <View style ={styles.versionContainer}>
            <Text style = {styles.versionText}>Version: 1.1</Text>
          </View>
        </ScrollView>
        <Footer currentlyActive = 'Profile' navigator = {this.props.navigator} numberOfJobs = {this.props.numberOfJobs}/>
      </View>
    );
  }

  onPressBasic(){

  }

  onPressCall(){
    Communications.phonecall(this.state.contactNumber, true)
  }

  onPressMail(){
    Communications.email([this.state.contactMail], null,null,'Kontakt',null)
  }
}

module.exports = Profile;
