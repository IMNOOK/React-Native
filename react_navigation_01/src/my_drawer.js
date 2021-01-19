import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import Logo from './assets/pics/home.png'
import {CommonActions} from '@react-navigation/native';

class SideDrawer extends Component {
    
    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }

    render () {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={Logo}
                        style={{width:40,  height:50}}
                    />
                </View>
                <Text style={styles.SectionHeading}>Section 1</Text>
                <View style>
                    <Text onPress={this.navigateToScreen('Home')}>Home</Text>
                    <Text onPress={this.navigateToScreen('User')}> User</Text>
                    <Text onPress={()=>alert('Help window')}>Help</Text>
                    <Text onPress={()=>alert('Info window')}>Info</Text>
                </View>
            </ScrollView>
            <View style={{paddingLeft: 10, paddingBottom: 30}}>
                <Text>Copyright @Min Wook, 2021</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },
    imageContainer: {
        padding: 50,
    },
    SectionHeading: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },

})

export default SideDrawer;
