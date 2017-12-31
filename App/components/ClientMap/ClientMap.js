
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export class ClientMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView style={styles.container}
        initialRegion={{
          latitude: 41.875556,
          longitude: -93.82,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25
        }}>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
    alignItems: 'center'
  },
});

