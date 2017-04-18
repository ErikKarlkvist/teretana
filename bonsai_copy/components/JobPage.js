'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} = ReactNative;
const styles = require('./styles');
const constants = styles.constants;
const Header = require('./Header');
const Footer = require('./Footer');
const ProfileItem = require('./ProfileItem');
class MyJobs extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View  style = {styles.container}>
        <Header titleBarText = 'Mina jobb' activeBack = 'true' navigator = {this.props.navigator}/>
        <ScrollView style = {styles.jobPageContainer}>
          <View style = {styles.seperationLine}>
            <View style = {styles.jobPageDescriptionContainer}>
              <Text style = {styles.jobPageTitle}>{this.props.item.overview}</Text>
              <Text style = {styles.jobPageDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text style = {styles.jobPageDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
              <Text style = {styles.jobPageDescription}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </View>
          <View style = {styles.jobPageDescriptionContainer}>
            <Text style = {styles.jobPageTitle}>Information</Text>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
              <View style = {styles.jobPageTitles}>
                <Text style = {styles.jobPageInformatonTitle}>Företag</Text>
                <Text style = {styles.jobPageInformatonTitle}>Adress</Text>
                <Text style = {styles.jobPageInformatonTitle}>Kontaktperson</Text>
                <Text style = {styles.jobPageInformatonTitle}>Kontaktnummer</Text>
                <Text style = {styles.jobPageInformatonTitle}>Jobbtyp</Text>
              </View>
              <View>
                <Text style = {styles.jobPageInformatonContent}>{this.props.item.company}</Text>
                <Text style = {styles.jobPageInformatonContent}>{this.props.item.adress}</Text>
                <Text style = {styles.jobPageInformatonContent}>{this.props.item.contactPerson}</Text>
                <Text style = {styles.jobPageInformatonContent}>{this.props.item.contactNumber}</Text>
                <Text style = {styles.jobPageInformatonContent}>{this.props.item.jobType}</Text>
              </View>
            </View>
            <View style = {[{marginTop:20},styles.seperationLine]}/>
            <TouchableOpacity underlayColor = {constants.greyMedium} onPress = {() => null}>
              <Text style = {styles.jobPageInterestedButton}> Lämna intresseanmälan </Text>
            </TouchableOpacity>
            <View style = {styles.seperationLine}/>
            <TouchableOpacity underlayColor = {constants.greyMedium} onPress = {() => null}>
              <Text style = {styles.jobPageMapButton}> Visa på kartan </Text>
            </TouchableOpacity>
            <View style = {styles.seperationLine}/>
            <TouchableOpacity underlayColor = {constants.greyMedium} onPress = {() => null}>
              <Text style = {styles.jobPageContactButton}> Ring kontaktperson </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = MyJobs;
