import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('./styles.js')
const { View, TouchableHighlight, Text, Image } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style = {{marginTop: 20, flexDirection: 'row'}}>
          <Image source = {{uri: 'https://cdn.emojidex.com/emoji/seal/muscle%28p%29.png?1426440315'}} style = {styles.setImage}/>
          <View>
            <Text style = {styles.nameText}>{this.props.item.title}</Text>
            <View style = {{alignItems: 'flex-start', flexDirection:'row'}}>
              <View style = {{alignItems: 'flex-end'}}>
                <Text style = {{marginTop: 20}}>Weight: </Text>
                <Text>Reps: </Text>
                <Text>Date: </Text>
              </View>
              <View style = {{alignItems: 'flex-start'}}>
                <Text style = {{marginTop: 20}}>{this.props.item.weight}</Text>
                <View style = {{flexDirection:'row'}}>
                  <Text>{this.props.item.reps1}</Text>
                  <Text> x </Text>
                  <Text>{this.props.item.reps2}</Text>
                </View>
                <Text>{this.props.item.date}</Text>
              </View>
            </View>
          </View>
          <View style = {{flex: 1}}/>
          <View style = {styles.difficulty}/>
        </View>
      </TouchableHighlight>
    );
  }
}
module.exports = ListItem;
