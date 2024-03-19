import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Soundbutton from "../components/Soundbutton"
import AppHeader from "../components/AppHeader"


export default class Homescreen extends React.Component {
  render(){
    return(
      <View>
      <AppHeader/>
      <Soundbutton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}