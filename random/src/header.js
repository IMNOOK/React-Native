import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, TouchableNativeFeedback} from 'react-native';

const Header = (props) => (
    <TouchableNativeFeedback
        onPress={props.head}    
    >
        <View style = {styles.header}>
            <Text>{props.name}</Text>
        </View>
    </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header;