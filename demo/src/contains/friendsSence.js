import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Navigator, ListView } from 'react-native';

import ChatSence from './chatSence'

export default class FriendsSence extends Component {
  // 初始化数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  goChat(rowData) {
    this.props.navigator.push({
      name: 'ChatSence',
      component: ChatSence,
      params: {
        name: rowData
      }
    })
  }

  render() {
    return (
      <View>
        <View
          style={styles.header}>
          <Text style={styles.headerText}>好友列表</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableOpacity 
              style={styles.listItem}
              onPress={this.goChat.bind(this,rowData)}>
              <Text>{rowData}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  listItem: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 10
  }
})
