import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

class HomeTab extends Component {
  render () {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Button
                title="Go To Home Stack"
                onPress={()=>{
                    this.props.navigation.navigate('Home_Stack')
                }}
            />
        </View>
    )
  }
}

export default HomeTab;
