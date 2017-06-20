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
  Button,
  Navigator
} from 'react-native';
import FriendsSence from './src/contains/friendsSence'

export default class demo extends Component {
  render() {
    let defaultName = 'FriendsSence';
    let defaultComponent = FriendsSence;
    return (
      <Navigator
        style={styles.nav}
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component
            {...route.params} navigator={navigator}
          />
        }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    marginTop: 25
  },
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

AppRegistry.registerComponent('demo', () => demo);
