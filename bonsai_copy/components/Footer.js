'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const {StyleSheet, Text, View, TouchableOpacity, Console} = ReactNative;
const styles = require('./styles');
const constants = styles.constants;
import {createIconSet} from 'react-native-vector-icons';
const glyphMap = { 'icon-name': 1234, test: '∆' };
const customIcon = createIconSet(glyphMap, 'FontName');
import Icon from 'react-native-vector-icons/FontAwesome';

class Footer extends Component {
  constructor(){
    super();
    this.getActive = this.getActive.bind(this);
    this.FreeJobs = this.FreeJobs.bind(this);
    this.MyJobs = this.MyJobs.bind(this);
    this.Profile = this.Profile.bind(this);
    this.state = {
      active: null
    }
  }

  //sets this.state.active to the active
  getActive(){
    if(this.props.currentlyActive == 'FreeJobs'){
      this.state.active =
      <View style = {styles.footerIcons}>
        <View style = {styles.footerSymbolContainer} >
          <Icon name="search" style = {[styles.footerSymbol, styles.footerTextActive]}>
            <Icon name="circle" style= {{color: 'red', fontSize: 15, marginRight: 100}}/>
          </Icon>
          <Text style = {[styles.footerText, styles.footerTextActive]}>Lediga jobb</Text>
        </View>
        <TouchableOpacity onPress = {this.MyJobs} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer}>
            <Icon name="calendar-check-o" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText}>Mina jobb</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.Profile} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer}>
            <Icon name="cog" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText} >Profil</Text>
          </View>
        </TouchableOpacity>
      </View>

    } else if (this.props.currentlyActive == 'MyJobs'){
      this.state.active =
      <View style = {styles.footerIcons}>
        <TouchableOpacity onPress = {this.FreeJobs} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer} >
            <Icon name="search" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText}>Lediga jobb</Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.footerSymbolContainer}>
          <Icon name="calendar-check-o" style = {[styles.footerSymbol, styles.footerTextActive]}/>
          <Text style = {[styles.footerText, styles.footerTextActive]}>Mina jobb</Text>
        </View>
        <TouchableOpacity onPress = {this.Profile} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer}>
            <Icon name="cog" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText} >Profil</Text>
          </View>
        </TouchableOpacity>
      </View>

    } else if(this.props.currentlyActive == 'Profile'){
      this.state.active =
      <View style = {styles.footerIcons}>
        <TouchableOpacity onPress = {this.FreeJobs} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer} >
            <Icon name="search" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText}>Lediga jobb</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.MyJobs} style = {{flex:1}}>
          <View style = {styles.footerSymbolContainer}>
            <Icon name="calendar-check-o" style = {styles.footerSymbol}/>
            <Text style = {styles.footerText}>Mina jobb</Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.footerSymbolContainer}>
          <Icon name="cog" style = {[styles.footerSymbol, styles.footerTextActive]}/>
          <Text style = {[styles.footerText, styles.footerTextActive]}>Profil</Text>
        </View>
      </View>
    }
  }

  render(){
    this.getActive();
    return(
      <View>
        <View style = {styles.footerBar}>
          {this.state.active}
        </View>
      </View>
    );
  }

  FreeJobs(){
    console.log('Kek');
    this.props.navigator.push({
      name: 'FreeJobs'
    });
  }

  MyJobs(){
    console.log('MyJobs');
    this.props.navigator.push({
      name: 'MyJobs'
    });
  }

  Profile(){
    this.props.navigator.push({
      name: 'Profile'
    });
  }

}

module.exports = Footer;
