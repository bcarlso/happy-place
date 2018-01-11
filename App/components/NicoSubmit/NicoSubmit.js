import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {MoodButton} from '../MoodButton/MoodButton.js';

export class Nico extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>To submit your timesheet, tell us how your week went...</Text>
        </View>
        <View style={styles.nico}>
          <MoodButton mood='smile'/>
          <MoodButton mood='meh'/>
          <MoodButton mood='frown'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nico: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
