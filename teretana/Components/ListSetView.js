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
  Image
} from 'react-native';

class ListSetView extends Component {
  render() {
    return (
      <TouchableHighlight style = {{marginTop: 20, flexDirection: 'row'}} onPress={this.props.onPress}>
        <Image source = {{uri: 'https://cdn.emojidex.com/emoji/seal/muscle%28p%29.png?1426440315'}} style = {styles.setImage}/>
        <View>
          <Text style = {styles.nameText}>{this.props.item.title}</Text>
          <View style = {{alignItems: 'flex-start'}}>
            <View style = {{alignItems: 'flex-end'}}>
              <Text style = {{marginTop: 20}}>Weight:</Text>
              <Text>Reps:</Text>
              <Text>Date:</Text>
            </View>
          </View>
        </View>
        <View style = {{flex: 1}}/>
        <View style = {styles.difficulty}/>
      </TouchableHighlight>
    );
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
  nameText: {
    fontSize: 20,
  },
  setImage: {
    width: 100,
    height: 100,
  },
  difficulty: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    marginRight: 20,

  }

});

module.exports = ListSetView;
