import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// import FriendsSence from './src/contains/friendsSence'

export default class ChatSence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goBack() {
    const { navigator } = this.props;

    if(navigator) {
      navigator.jumpBack()
    }
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
        
        <Text>聊天中</Text>
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
  }
})
