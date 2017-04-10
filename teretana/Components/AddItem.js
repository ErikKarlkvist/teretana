'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('./styles.js')
const constants = styles.constants;
const moment = require('moment');
const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  ListSetView,
  TextInput,
  Image,
  Date
} = ReactNative;

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemRef: null,
      title: '',
      weight: '',
      reps1: '',
      reps2: '',
      desc: '',
      diff: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  render() {
      return (
        <View style={styles.container}>

          <StatusBar title="Add new set" navigator={this.props.navigator}/>
          <View style={{flex:1, alignItems: 'center'}}>
            <View style={{width: 270, marginTop: 16, flexDirection:'column'}}>

            <View style={{flexDirection: 'row'}}>
              <Image source = {{uri: 'https://cdn.emojidex.com/emoji/seal/muscle%28p%29.png?1426440315'}} style = {styles.setImage}/>
              <View style={[{marginLeft: 20, height: 50, width: 150, alignSelf: 'flex-end'},styles.action_grey]}>
                <TouchableHighlight onPress={this._changeImage.bind(this)} style= {{alignSelf: 'center'}} >
                  <Text style={styles.actionText}>New image</Text>
                </TouchableHighlight>
              </View>
            </View>



              <Text style={{fontSize:15, marginTop: 16}}>Title: </Text>
              <TextInput
                style={{height: 30, borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white'}}
                ref= {(tle) => { this.title = tle; }}
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}/>

              <Text style={{fontSize:15, marginTop: 16}}>Weight: </Text>
              <TextInput
                style={{height: 30, borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white'}}
                ref= {(wght) => { this.weight = wght; }}
                onChangeText={(weight) => this.setState({weight})}
                value={this.state.weight}/>

              <Text style={{fontSize:15, marginTop: 16}}>Reps (ex 3x10): </Text>
              <View style={{flexDirection: 'row', height: 30}}>
                <TextInput
                  style={{borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white', flex: 1}}
                  ref= {(r1) => { this.reps1 = r1; }}
                  onChangeText={(reps1) => this.setState({reps1})}
                  value={this.state.reps1}/>
                <View style={{flex:0.2, alignItems:'center'}}>
                  <Text style={{fontSize:15, marginTop: 5}}>X</Text>
                </View>
                <TextInput
                  style={{borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white', flex: 1}}
                  ref= {(r2) => { this.reps2 = r2; }}
                  onChangeText={(reps2) => this.setState({reps2})}
                  value={this.state.reps2}/>
              </View>

              <Text style={{fontSize:15, marginTop: 16}}>Description: </Text>
              <TextInput
                style={{height: 90, borderColor: 'darkgrey', borderWidth: 1, backgroundColor:'white'}}
                ref= {(dscp) => { this.desc = dscp; }}
                onChangeText={(desc) => this.setState({desc})}
                value={this.state.desc}/>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={[{flex:1}, styles.action_grey]}>
              <TouchableHighlight onPress={this._cancel.bind(this)} >
                <Text style={styles.actionText}>Cancel</Text>
              </TouchableHighlight>
            </View>
            <View style={[{flex:1}, styles.action]}>
              <TouchableHighlight onPress={this._add.bind(this)} >
                <Text style={styles.actionText}>Add</Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>
      );
  }

  componentWillMount() {
    var navigator = this.props.navigator;
    var uid = firebase.auth().currentUser.uid;
    var itemRef = firebase.database().ref(uid);
    this.setState({
      itemRef: itemRef
    });
  }

  _changeImage(){}

  //should check if something i not set
  _add(){
    var today = moment().format("Do MMM YY")

    this.state.itemRef.push({
      title: this.state.title,
      weight: this.state.weight,
      reps1: this.state.reps1,
      reps2: this.state.reps2,
      desc: this.state.desc,
      date: today
    })

    this.props.navigator.push({
      name: 'AllSetsList', // Matches route.name
    })
  }
  _cancel(){
    this.props.navigator.push({
      name: 'AllSetsList', // Matches route.name
    })
  }
}

module.exports = AddItem;
