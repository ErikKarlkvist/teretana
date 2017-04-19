'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableHighlight, Image, ListView} = ReactNative;
const styles = require('./styles');
const Header = require('./Header');
const Footer = require('./Footer');
const ListItem = require('./ListItem');

class FreeJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <View style = {styles.noResult}><Text style = {styles.jobDateText}>Inget resultat</Text></View>
    };
  }

  render(){
    if(this.props.dataSource.getRowCount() != 0){
      this.state.content = <ListView dataSource={this.props.dataSource} renderRow={this._renderItem.bind(this)}/>

    }
    return(
      <View  style = {styles.container}>
        <Header titleBarText = 'Lediga Jobb'/>
        <View style = {styles.content}>
          <Image source={require('./images/bonsai_logo.png')} style = {styles.backgroundImage}>
            {this.state.content}
          </Image>
        </View>
        <Footer currentlyActive = 'FreeJobs' navigator = {this.props.navigator} numberOfJobs = {this.props.numberOfJobs}/>
      </View>
    );
  }

  _renderItem(item) {
    const onPress = () => {
      this.props.navigator.push({
        name: 'JobPage',
        item: item
      });
    };
    return <ListItem item ={item} onPress={onPress}/>
  };
}

module.exports = FreeJobs;
