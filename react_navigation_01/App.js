/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Linking,
} from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import StackHomeScreen from './src/home'
import StackUserScreen from './src/user'
import LogoTitle from './src/logo'
import DrawerHomeScreen from './src/home_drawer'
import DrawerUserScreen from './src/user_drawer'
import SideDrawer from './src/my_drawer'
import TabHomeScreen from './src/home_tab'
import TabUserScreen from './src/user_tab'
import TabMessage from './src/message_tab'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


/*
  Stack Navigator
  -Drawer Navigator
    -Drawer Screen
    -Tab Navigator
      -Tab Screen A
  -Stack Screen B
*/

const Tabcomponent  = () => {
  return (
    <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveBackgroundColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            },
            labelPosition: 'beside-icon'
          }}
          screenOptions ={({route})=>({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => (
              tabBarIcon(focused, route.name)
            )
          })}
        >
          <Tab.Screen name="Home" component={TabHomeScreen}/>
          <Tab.Screen name="User" component={TabUserScreen}/>
          <Tab.Screen name="Message" component={TabMessage}/>
        </Tab.Navigator>
  )
}

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      drawerPosition="left"
      drawerStyle={{
        backgroundColor: 'white',
        width: 200
      }}
      drawerContent={props=> <CustomDrawerContent{...props}/>}
      //drawerContent={props=> <SideDrawer{...props}/> }

    >
      <Drawer.Screen name="Route" component={Tabcomponent}/>
      <Drawer.Screen name="User" component={DrawerUserScreen}/>
    </Drawer.Navigator>
  )
}

const tabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if(name === 'Home'){
    iconName = 'home-outline'
    //iconImagePath = require('./src/assets/pics/home.png')
  }else if(name === 'User'){
    iconName = 'people-outline'
    //iconImagePath = require('./src/assets/pics/1.jpg')
  }else if(name ==='Message'){
    iconName = 'mail-outline'
    //iconImagePath = require('./src/assets/pics/1.jpg')
  }

  iconSize = focused ? 26 : 20;
  return (
    <Ionicons
      name={iconName}
      size={iconSize}
    />

    // <Image
    //   style={{
    //     width: focused ? 30 : 20,
    //     height: focused? 30: 20,
    //   }}
    //   source = {iconImagePath}
    // />
  )

}

CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem
        label="Help"
        onPress={()=>Linking.openURL('https://www.google.com')}
        icon={()=><LogoTitle/>}
      />
      <DrawerItem
        label="Info"
        onPress={()=>alert('Info Window')}
      />
    </DrawerContentScrollView>
  )
}

const HeaderRight = () => {
  const navigationss = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPres={()=>{
          navigationss.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}

class App extends Component {  

  logoTitle = () => {
    return (
      <Image
        style={{width: 40, height: 40}}
        source={require('./src/assets/pics/home.png')}
      />
    )
  }

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen 
            name="Main" 
            component={DrawerComponent}
            options={{
              headerRight: ({}) => <HeaderRight/>
            }} 
          />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      // Stack
      // <NavigationContainer>
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle:{
      //         backgroundColor: 'pink',
      //       },
      //       headerTintColor: 'red',
      //       headerTitleStyle:{
      //     }
      //     }}
      //   >
          
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: ()=>(
      //           <Button
      //             title="Info"
      //             onPress={()=>alert('I am button!')}
      //             color='orange'
      //           />
      //         )
      //       }}
      //     />
          
      //     <Stack.Screen 
      //       name="User" 
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gamin',
      //         userLastName: 'Lee'
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle:{
      //             backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle:{
      //           color:'purple'
      //         }
      //       }}
      //     />

      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

export default App;
