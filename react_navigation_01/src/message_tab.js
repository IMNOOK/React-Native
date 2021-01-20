import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

class Message extends Component {
  render () {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Message Screen</Text>
        </View>
    )
  }
}

export default Message;
