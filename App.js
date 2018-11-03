import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label, Left, Right, Platform, StatusBar } from 'native-base';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loading from './screens/LoadingScreen'
import SignUp from './screens/SignUpScreen'
import Login from './screens/LoginScreen'
import Main from './screens/MainScreen'
import Home from './screens/HomeScreen'
import WorkOrders from './screens/WorkOrderScreen'
import Profile from './screens/ProfileScreen'
import ToDo from './screens/ToDoScreen'



const CustomerDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={{ height: 150, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('./img/icons/xxxhdpi.png')} style={{ height: 100, width: 100, borderRadius: 10 }} />
  </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AuthStack = createStackNavigator({
  LoginScreen: Login,
  SignUpScreen: SignUp,
})

const AppStack = createStackNavigator({
  MainScreen: Main,
  HomeScreen: Home,
})

const RootStack = createDrawerNavigator ({
  MainScreen: Main,
  ProfileScreen: Profile,
  WorkOrderScreen: WorkOrders,
  ToDoScreen: ToDo,
}, 

{
  contentComponent: CustomerDrawerComponent,
  contentOptions: {
    activeTintColor: 'black'
  }
}
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    padding: 40,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 40,
  }
});
