import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Homescreen extends Component {
  goToBuzzerscreen = (buzzerColor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF7F7F' }]}
          onPress={()=>{this.goToBuzzerscreen('red')}}>
          <Text style={styles.buttonText}>Team Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ADD8E6' }]}
          onPress={()=>{this.goToBuzzerscreen('blue')}}>
          <Text style={styles.buttonText}>Team Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#90ee90' }]}
          onPress={()=>{this.goToBuzzerscreen('green')}}>
          <Text style={styles.buttonText}>Team Green</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={[styles.button, { backgroundColor: '#CBC3E3' }]}
          onPress={()=>{this.goToBuzzerscreen('purple')}}>
          <Text style={styles.buttonText}>Team Purple</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#90ee90',
    justifyContent: 'center',
    padding: 1,
    borderRadius: 40,
    marginTop: 50,
    width: 300,
    height: 80,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
