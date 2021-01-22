import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, Platform, PermissionsAndroid } from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';
import Supertext from './src/utils/supertext';

class App extends Component {
  state = {
    avatar: ' ',
    titles: 'Add an Images'
  }
  
  addImage = () => {
    
    // launchCamera({}, response => {
    //   this.setState({
    //     titles: 'clicked',
    //     avatar: response.uri
    //   })
    // })

    launchImageLibrary({}, response => {
      this.setState({
        titles: 'clicked',
        avatar: response.uri
      })
    })
  }

  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('iOS')
      return true
    } else{
      console.warn('Android')

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
      )
      {
        return true
      } else {
        return false
      }

    }
  }

  getContacts = () => {
    this.requestContactPermission()
    .then((didGetPermission)=>{
      if(didGetPermission) {
        Contacts.getAll((err, contents) => {
          if(err){
            throw err;
          }
          console.warn(contents)
        })
      } else {
        alert("no permission")
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Supertext>This is my template</Supertext>
        <Image
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />
        <Button
          title="Load Contacts"
          onPress={()=>this.getContacts()}
        />
        <Button
          title={this.state.titles}
          onPress={()=>this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbb'
  },
  avatar: {
    width: '100%',
    height: 400
  }

})

export default App;