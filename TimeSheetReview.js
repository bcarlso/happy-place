import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Nico} from './App/components/NicoSubmit/NicoSubmit.js'
import Titlebar from "./App/components/Titlebar/TitleBar";

export default class TimeSheetReview extends Component {
  render() {
    let logo = require('./assets/logo-final-icon.png');
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Titlebar title='Review Timesheet'/>
        </View>
        <ScrollView style={styles.body}>
          <Image style={styles.background} source={logo}/>
        </ScrollView>
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
  footer: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    opacity: .25,
  }

});
