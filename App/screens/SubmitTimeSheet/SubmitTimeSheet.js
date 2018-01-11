import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Nico} from '../../components/NicoSubmit/NicoSubmit'
import TitleBar from "../../components/Titlebar/TitleBar";
import TimeSheet from "../../components/TimeSheet/TimeSheet";
import {ClientMap} from "../../components/ClientMap/ClientMap";
import {ColorPallette} from "../../components/ColorPallette/ColorPallette";

export default class SubmitTimeSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TitleBar title='LTMS 2.0'/>
        </View>
        <View style={styles.body}>
          <ClientMap style={styles.body}/>
        </View>
        <View style={styles.timesheet}>
          <TimeSheet navigation={this.props.navigation}/>
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
    backgroundColor: ColorPallette.GREY,
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
