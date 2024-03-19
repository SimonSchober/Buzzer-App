import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Buzzer App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  container: { backgroundColor: 'turquoise', borderRadius: 20, marginTop: 60 },
});
