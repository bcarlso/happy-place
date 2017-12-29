
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ClientMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>...Map...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

