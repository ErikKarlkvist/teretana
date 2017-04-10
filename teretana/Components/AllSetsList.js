/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('./styles.js');

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  ListSetView,

} = ReactNative;

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemRef: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  _renderItem(item) {
    const onPress = () => {
      AlertIOS.alert(
        'Remove set',
        'TODO: Edit and add more page',
        [
          {text: 'Remove', onPress: () => this.state.itemRef.child(item._key).remove()},
          {text: 'Cancel', onPress: () => console.log('Cancelled')}

        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

  render() {
      return (
        <View style={styles.container}>

          <StatusBar title="Teretana" navigator={this.props.navigator}/>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>
          <ActionButton onPress={this._addItem.bind(this)} title="Add new set" />

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

  componentDidMount() {
    this.listenForItems(this.state.itemRef);
  }

  listenForItems(itemsRef) {
    console.log(itemsRef);
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          desc: child.val().desc,
          reps1: child.val().reps1,
          reps2: child.val().reps2,
          weight: child.val().weight,
          date: child.val().date,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  _addItem() {
    this.props.navigator.push({
      name: 'AddItem', // Matches route.name
    })
  }


  _navigate(){
    this.props.navigator.push({
      name: 'Home', // Matches route.name
    })
  }
}

export default GroceryList;
