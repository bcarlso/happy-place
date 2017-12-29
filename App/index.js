import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Nico} from './components/NicoSubmit/NicoSubmit.js'
import TitleBar from "./components/Titlebar/TitleBar";
import TimeSheet from "./components/TimeSheet/TimeSheet";
import {ClientMap} from "./components/ClientMap/ClientMap";

export default class App extends Component {
  render() {
    let logo = require('../assets/logo-final-icon.png');
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TitleBar title='LTMS 2.0'/>
        </View>
        <View style={styles.body}>
          <ClientMap/>
        </View>
        <View style={styles.timesheet}>
          <TimeSheet/>
        </View>
        <View style={styles.footer}>
          <Nico/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foo: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: .15,
    flexDirection: 'row',
    backgroundColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    // justifyContent: 'center',
  },
  footer: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timesheet: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    opacity: .25,
  }

});
