import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


class HomeScreen extends Component {
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
                    this.props.navigation.navigate('User', {
                        userIdx: 100,
                        userName: 'Min wook',
                        userLastName: "Lee"
                    })
                }}
            />
            <Button
                title="Change the title"
                onPress={()=>{
                    this.props.navigation.setOptions({
                        title: 'Changed!!',
                        headerStyle:{
                            backgroundColor: 'pink'
                        },
                        headerTintColor: 'red'

                    })
                }}
            />
        </View>
    )
  }
}

export default HomeScreen;
