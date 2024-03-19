import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';
export default class Soundbutton extends Component {
  playsound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  isButtonPress(buttonColor) {
    var prp=db.ref('teams/' + buttonColor + '/').update({
      isButtonPressed: true,
      timeStamp: 0,
    });
    console.log("altered");
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttonColor = this.props.color;
          this.isButtonPress(buttonColor);
          this.playsound();
        }}>
        <Text style={styles.buttonText}>BUZZER</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    marginLeft: 100,
    borderWidth: 5,
    borderColor: 'rgba(0,0,0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
