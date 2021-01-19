import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

class HomeDrawer extends Component {
  render () {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Button
                title="To User Screen"
                onPress={()=>{
                    this.props.navigation.navigate('User')
                }}
            />
        </View>
    )
  }
}

export default HomeDrawer;
