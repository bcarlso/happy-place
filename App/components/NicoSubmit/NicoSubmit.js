import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {MoodButton} from '../MoodButton/MoodButton.js';

export class Nico extends Component {
  render() {
    let happy = require('../../../assets/happy-face.png');
    let neutral = require('../../../assets/neutral-face.png');
    let sad = require('../../../assets/sad-face.png');
    return (
      <View>
        <View>
          <Text>To submit your timesheet, tell us how your week went...</Text>
        </View>
        <View style={styles.nico}>
          <MoodButton title='😀'/>
          <MoodButton title='😐'/>
          <MoodButton title='☹️'/>
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
