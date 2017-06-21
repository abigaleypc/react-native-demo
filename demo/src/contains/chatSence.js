import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,ListView} from 'react-native';

// import FriendsSence from './src/contains/friendsSence'

export default class ChatSence extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{
        name: 'ABIAGE',
        msg: '我来啦来啦来啦'
      },{
        name: 'ABIAGE',
        msg: '我来啦来啦来啦'
      },{
        name: 'ABIAGE',
        msg: '我来啦来啦来啦'
      }])
    };
  }
  goBack() {
    const { navigator } = this.props;

    if(navigator) {
      navigator.jumpBack()
    }
  }

  sendMsg() {

  }
  render() {
    return (
      <View>
        <View 
        style={styles.header}>
          <TouchableOpacity 
          onPress={this.goBack.bind(this)}
          style={styles.backButton}>
            <Text style={styles.headerText}>返回</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>与{this.props.name}聊天</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableOpacity 
              style={styles.listItem}>
              <Text>{rowData.name}:{rowData.msg}</Text>
            </TouchableOpacity>
          }
        />
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity 
            style={styles.sendBtn}
          >
            <Text style={styles.sendText}>发送</Text>
          </TouchableOpacity>
        </View>
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
  backButton:{
    position: 'absolute',
    left: 10,
    top: 16,
    
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    height: 30, 
    borderColor: 'gray',
    borderWidth: .8
  },
  sendBtn: {
    width: 80,
    height: 40,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#333',
    backgroundColor: '#333333', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendText: {
    fontSize: 18,
    color: '#fff'

  }
})
