/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   ListView,
   ScrollView,
   Navigator,
   AlertIOS,
   Console
 } from 'react-native';
 import AllSetsList from './Components/AllSetsList';
 import LoginPage from './Components/LoginPage';
 import Firebase from './Components/Firebase';
 import AddItem from './Components/AddItem';
 import * as firebase from 'firebase';

export default class teretana extends Component {
  constructor(){
    super();
    Firebase.initialize();
    this.renderScene = this.renderScene.bind(this);

    this.getInitialView();
    this.state = {
      userLoaded: false,
      initialView: null,
      itemRef: null
    }
    this.getInitialView = this.getInitialView.bind(this);
  }
  render() {
    if(this.state.userLoaded){
      return (
        <Navigator
          initialRoute= {{name: this.state.initialView}}
          renderScene={this.renderScene}/>
      );
    } else {
      return null;
    }
  }

  renderScene(route, navigator) {
     if(route.name == 'LoginPage'){
       return <LoginPage navigator={navigator}/>
     }else if(route.name == 'AllSetsList') {
       return <AllSetsList navigator={navigator}/>
     }else if(route.name == 'AddItem') {
       return <AddItem navigator={navigator}/>
     }
  }

  getInitialView() {

    firebase.auth().onAuthStateChanged((userAvailable) => {
    //  let initialView = user ? "AllSetsList" : "LoginPage";
      //let initialView = "LoginPage"
      if(userAvailable){
        this.setState({
          userLoaded: true,
          initialView: 'AllSetsList',
        });
      } else {
        this.setState({
          userLoaded: true,
          initialView: 'LoginPage',
        });
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('teretana', () => teretana);
