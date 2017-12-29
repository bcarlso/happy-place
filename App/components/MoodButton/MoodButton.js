
import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export class MoodButton extends Component {
  constructor(props) {
    super(props);
    this.mood = props.title;
  }

  _onPressButton() {
    Alert.alert('Submitted')
  }

  _onLongPressButton() {
    Alert.alert('Give Feedback')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.mood}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    width: 115,
    alignItems: 'center',
    backgroundColor: '#005978',
    borderRadius: 50
  },
  buttonText: {
    padding: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});
