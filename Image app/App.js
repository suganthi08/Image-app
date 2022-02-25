import  React,{ Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import PortraitScreen from './screens/PortraitScreen';
import LandscapeScreen from './screens/LandscapeScreen';
import AbstractScreen from './screens/AbstractScreen';

import  firebase from "firebase";
import { firebaseConfig } from "./config";

export default class App extends React.Component {
 render(){
  return (
     <View>
        <AppContainer />
      </View>
  );
}
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  PortraitScreen :PortraitScreen,
  LandscapeScreen : LandscapeScreen, 
  AbstractScreen : AbstractScreen
});

const AppContainer = createAppContainer(AppNavigator);
