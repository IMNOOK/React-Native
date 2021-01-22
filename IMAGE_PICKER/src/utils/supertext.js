import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, Platform, PermissionsAndroid } from 'react-native';

const Supertext = (props) => {

    return (
    <View style={styles.container}>
        <Text>{props.children}</Text>
    </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bbb'
    },
})

export default Supertext;