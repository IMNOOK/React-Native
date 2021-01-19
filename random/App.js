/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from './src/header'
import Generator from './src/generate'
import NumList from './src/numlist'
import TextList from './src/textlist'
import Slider from '@react-native-community/slider';
import ModalComponent from './src/modal'
import Steak from './assets/images/1.jpg'


class App extends Component{
  state = {
    appName: 'My First App',
    random: [36, 999],
    myTextInput: '',
    alphabet: ['a','b'],
    value: 50,
  }



  headerpop = () => {
    alert('this is my first app')
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100) + 1;

    this.setState(prevState => {
      return{
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index)=>{
      return position != index;
    })

    this.setState({
      random: newArray
    })
  }

  onTextDelete = (position) => {
    const newArray = this.state.alphabet.filter((num, index)=>{
      return position != index;
    })

    this.setState({
      alphabet: newArray
    })
  }

  onChangeInput = (event) => {
    this.setState({
        myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  sliderValueChange = (value) => {
    this.setState({
      value: value
    })
  }

  render(){
    return(
      <View style={styles.mainView}>
        <Header name={this.state.appName} head={this.headerpop}/>
        <Image
          style={styles.image}
          source={Steak}
        />
        <Slider
          style={{width: 200, height: 30}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={this.sliderValueChange}
          step={5}
        />
        <Text>{this.state.value}</Text>
        <TextInput
          value = {this.state.myTextInput}
          style = {styles.input}
          onChangeText = {this.onChangeInput}
          autoCapitalize ={'none'}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
        <Generator add={this.onAddRandomNum}/>
        <ScrollView
          style={{width: '100%'}}
        >
          <TextList text={this.state.alphabet} delete={this.onTextDelete}/>
          <NumList num={this.state.random} delete={this.onNumDelete}/>
        </ScrollView>
        <ModalComponent/>
        <ActivityIndicator
          style={{padding: 10}}
          size="large"
          color="green"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  input:{
    width: '100%',
    backgroundColor: 'pink'
  },
  image:{
    width: '100%'
  }

})

export default App;
