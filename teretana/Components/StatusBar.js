'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const styles = require('./styles.js')
const { StyleSheet, Text, View, Button, AlertIOS} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style = {{height: 20, alignSelf: 'stretch', backgroundColor: '#F38630'}}/>
        <View style={{height: 60, flexDirection:'row', alignSelf:'stretch',backgroundColor: '#F38630', alignItems:'center'}}>
          <View style={{}}>
            <Button
              onPress = {this.reallyLogout.bind(this)}
              title="Log out"
              color='#FFFFFF'
              accessibilityLabel="Log out"
              />
          </View>
          <View style={{width: 230, alignItems: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily: 'Avenir'}}>{this.props.title}</Text>
          </View>
        </View>
    </View>
    );
  }

  reallyLogout(){
    AlertIOS.alert(
      'Are you sure you want to log out?',
      null,
      [
        {text: 'Yes', onPress: () => this.logout()},
        {text: 'No', onPress: () => console.log('Cancelled')}
      ],
    );
  }

  async logout() {

       try {

           await firebase.auth().signOut();

           this.props.navigator.push({
               name: "LoginPage"
           })

       } catch (error) {
           console.log(error);
       }

   }
}

module.exports = StatusBar;
