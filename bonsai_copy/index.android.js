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
  StatusBar,
  Navigator,
  ListView
} from 'react-native';
const FreeJobs = require('./components/FreeJobs');
const MyJobs = require('./components/MyJobs');
const Profile = require('./components/Profile');
const styles = require('./components/styles');
const JobPage = require('./components/JobPage');
const buildStyleInterpolator = require('buildStyleInterpolator');
const constants = styles.constants;

export default class bonsai_copy extends Component {
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.state = {
      items: [],
      initialView: 'FreeJobs',
      nextView: 'FreeJobs',
      freeJobsSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  }

  render() {
    return (
      <Navigator
        initialRoute= {{name: this.state.initialView, item: null}}
        renderScene={this.renderScene}
        configureScene= {(route, routeStack) => {
           if(route.item != null){
            return Navigator.SceneConfigs.FloatFromBottom
          } else {
            return Navigator.SceneConfigs.FadeAndroid
          }
        }}
        />
    );
  }

  createItem(overview, date, earning, company, adress, contactPerson, contactNumber, jobType){
    var colour = null;
    if(this.state.items.length%2 == 0){
      colour = 'blue';
    } else {
      colour = 'green';
    }
    this.state.items.push({
      overview: overview,
      date: date,
      earning: earning,
      colour: colour,
      company: company,
      adress: adress,
      contactPerson: contactPerson,
      contactNumber: contactNumber,
      jobType: jobType
    })
    this.setState({
      freeJobsSource: this.state.freeJobsSource.cloneWithRows(this.state.items)
    });
  }

  componentDidMount(){
      this.createItem('Fotografering av ett antal idrottsevent - tillsammans med proffsfotograf', 'Måndagen 10 maj', '51200', 'Bonsai', 'Tuffagatan 12', 'Sven Ingvar Jönsson', '0712345678', 'Engångsuppdrag');
      this.createItem('Dataövervakare', 'Lördag 20 dec 2018', '42', 'Google', 'Långt bort', 'Sergey Brin', 'Secret', 'Spioneri');
      this.createItem('Tentafuskare', 'Torsdag 20 apr', '1337', 'Chalmers', 'Chalmers Tvärgata', 'Mr. Chalmers', '123123123', 'Tentafusk');
      this.createItem('Bonsai Kopierare', 'Igår kväll', '0', 'Bonsai', 'Hemma', 'Alexander', '#DetCoolasteNumretIStan', '"React Native"-övning');
  }

  renderScene(route, navigator) {
    this.state.nextView = route.name;
    if(route.name == 'FreeJobs'){
     return <FreeJobs navigator={navigator} dataSource={this.state.freeJobsSource}/>
    }else if(route.name == 'MyJobs') {
     return <MyJobs navigator={navigator}/>
    }else if(route.name == 'Profile') {
     return <Profile navigator={navigator}/>
    }else if(route.name == 'JobPage'){
     return <JobPage navigator={navigator} item = {route.item}/>
    }
  }
}


var NoTransition = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
};

const Transitions = {
    NONE: {
        ...Navigator.SceneConfigs.FadeAndroid,
        gestures: null,
        defaultTransitionVelocity: 1000,
        animationInterpolators: {
            into: buildStyleInterpolator(NoTransition),
            out: buildStyleInterpolator(NoTransition)
        }
    }
};


AppRegistry.registerComponent('bonsai_copy', () => bonsai_copy);
