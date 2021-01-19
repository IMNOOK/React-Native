import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

class UserDrawer extends Component {
  render () {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>User Screen</Text>
            <Button
                title="To Home Screen"
                onPress={()=>{
                    this.props.navigation.navigate('Home')
                }}
            />
        </View>
    )
  }
}

export default UserDrawer;
