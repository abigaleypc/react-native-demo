import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Navigator, ListView, Image } from 'react-native';

import ChatSence from './chatSence';

import friendsData from '../../mocks/friendsData';

export default class FriendsSence extends Component {
  // 初始化数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(friendsData),
      imageIndex: 1
    };
  }
  goChat(rowData) {
    this.props.navigator.push({
      name: 'ChatSence',
      component: ChatSence,
      params: {
        name: rowData.name
      }
    })
  }

  render() {
    let imageIndex = 0;
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
              onPress={this.goChat.bind(this, rowData)}
              >
              {
                (() => {
                  switch (rowData.id) {
                    case 1:
                      return <Image
                        source={require('../../assets/avatar1.jpeg')}
                        style={styles.avatar} />
                    case 2:
                      return <Image
                        source={require('../../assets/avatar2.jpeg')}
                        style={styles.avatar} />
                    case 3:
                      return <Image
                        source={require('../../assets/avatar3.jpeg')}
                        style={styles.avatar} />
                    case 4:
                      return <Image
                        source={require('../../assets/avatar4.jpeg')}
                        style={styles.avatar} />
                    case 5:
                      return <Image
                        source={require('../../assets/avatar5.jpeg')}
                        style={styles.avatar} />
                    case 6:
                      return <Image
                        source={require('../../assets/avatar6.jpeg')}
                        style={styles.avatar} />
                    case 7:
                      return <Image
                        source={require('../../assets/avatar7.jpeg')}
                        style={styles.avatar} />
                    case 8:
                      return <Image
                        source={require('../../assets/avatar8.jpeg')}
                        style={styles.avatar} />
                  }
                })()
              }
              <Text style={styles.name}>{rowData.name}</Text>
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
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'

  },
  name: {
    marginLeft: 10,
    lineHeight: 40
  },
  avatar: {
    width: 40,
    height: 40,
  }
})
