import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Soundbutton from './components/Soundbutton';
import AppHeader from './components/AppHeader';
import Homescreen from './Screens/Homescreen';
import BuzzerScreen from './Screens/buzzerScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends Component {
  render() {
    return (
      <View
        style={{
          borderRadius: 20,
          marginRight: 30,
          marginLeft: 30,
        }}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Homescreen: Homescreen,
  BuzzerScreen: BuzzerScreen,
});

var AppContainer = createAppContainer(AppNavigator);
