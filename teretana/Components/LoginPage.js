'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import ActionButton from './ActionButton';
import * as firebase from 'firebase';
const styles = require('./styles.js');
const constants = styles.constants;
const { StyleSheet,
        Text,
        View,
        TouchableHighlight,
        TextInput,
        Button,
        AlertIOS
      } = ReactNative;
//var app = new Firebase('fir-test-1446c.firebaseio.com');

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      Lusername: '',
      Lpassword: '',
      Rusername: '',
      Rpassword: '',
      RCpassword: ''
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style = {{height: 20, alignSelf: 'stretch', backgroundColor: '#F38630'}}/>
        <View style = {{backgroundColor: '#F38630', alignSelf: 'stretch', alignItems: 'center', padding:15}}>
            <Text style={{fontSize: 60, fontWeight: 'bold', fontFamily: 'Avenir'}}>Teretana</Text>
        </View>

        <Text style={{width: 270, marginTop: 20, fontSize: 20}}>Register</Text>
        <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>
          <Text style={{fontSize:15}}>Email: </Text>
          <TextInput
            style={{height: 30, borderColor: 'lightgrey', borderWidth: 1}}
            ref= {(usr) => { this.Rusername = usr; }}
            onChangeText={(Rusername) => this.setState({Rusername})}
            value={this.state.Rusername}
            placeholder = {'IAmStrong@email.com'}
            />
        </View>
        <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>
          <Text style={{fontSize:15}}>Password: </Text>
          <TextInput
            style={{height: 30, borderColor: 'lightgrey', borderWidth: 1}}
            ref= {(pass) => { this.Rpassword = pass; }}
            onChangeText={(Rpassword) => this.setState({Rpassword})}
            secureTextEntry= {true}
            value={this.state.Rpassword}/>
        </View>
        <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>
          <Text style={{fontSize:15}}>Confirm password: </Text>
          <TextInput
            style={{height: 30, borderColor: 'lightgrey', borderWidth: 1}}
            ref= {(pass) => { this.RCpassword = pass; }}
            onChangeText={(RCpassword) => this.setState({RCpassword})}
            secureTextEntry= {true}
            value={this.state.RCpassword}/>
        </View>
        <View style = {{width: 270, marginTop: 16, alignItems:'flex-end'}}>
          <Button
            onPress = {this.registerButton.bind(this)}
            title="Register"
            color='#FA6900'
            accessibilityLabel="Register"
            />
        </View>

        <View style = {{alignSelf: 'stretch', alignItems: 'center', backgroundColor: '#E9E9E9', marginTop: 10, padding: 16, marginBottom:0}}>
          <Text style={{width: 270, fontSize: 20}}>Already have an account?</Text>
          <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>
            <Text style={{fontSize:15}}>Email: </Text>
            <TextInput
              style={{height: 30, borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white'}}
              ref= {(usr) => { this.Lusername = usr; }}
              onChangeText={(Lusername) => this.setState({Lusername})}
              value={this.state.Lusername}
              placeholder = {'IAmStrong@email.com'}
              />
          </View>
          <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>
            <Text style={{fontSize:15}}>Password: </Text>
            <TextInput
              style={{height: 30, borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white'}}
              ref= {(pass) => { this.Lpassword = pass; }}
              onChangeText={(Lpassword) => this.setState({Lpassword})}
              secureTextEntry= {true}
              value={this.state.Lpassword}/>
          </View>
          <View style = {{width: 270, marginTop: 16, alignItems:'flex-end'}}>
            <Button
              onPress = {this.loginButton.bind(this)}
              title="Login"
              color='#FA6900'
              accessibilityLabel="Login"
              />
          </View>
        </View>
      </View>
    );
  }

  async loginButton(){
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.Lusername, this.state.Lpassword);
      this.props.navigator.push({
        name: 'AllSetsList'
      });
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      AlertIOS.alert(
       'Something went wrong',
       errorMessage
      );
    }
  }

  async registerButton(){
    if(this.state.Rpassword != this.state.RCpassword){
      AlertIOS.alert(
       'Something went wrong',
       'Passwords must match'
      );
    } else {
      try{
        await firebase.auth().createUserWithEmailAndPassword(this.state.Rusername, this.state.Rpassword);
        this.props.navigator.push({
          name: 'AllSetsList'
        });
      } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        AlertIOS.alert(
         'Something went wrong',
         errorMessage
        );
      }
    }
  }


}
module.exports = LoginPage;
