import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Titlebar extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{this.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    paddingTop: 10,
    fontSize: 24,
  },
});
