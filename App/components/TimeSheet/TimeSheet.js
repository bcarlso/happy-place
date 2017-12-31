import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TimeSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.week}>
          <DayDetails for='Sun'/>
          <DayDetails for='Mon'/>
          <DayDetails for='Tue'/>
          <DayDetails for='Wed'/>
          <DayDetails for='Thu'/>
          <DayDetails for='Fri'/>
          <DayDetails for='Sat'/>
          <EditDetails/>
        </View>
      </View>);
  }
}

class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.for = props.for;
  }

  render() {
    return (<View style={styles.day}>
      <Text style={styles.dayHeader}>{this.for}</Text>
      <Text style={styles.dayHours}>10.0</Text>
    </View>);

  }
}

class EditDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<View style={styles.edit}>
      <Icon name='edit' size={32} color='white'/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#843B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  week: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    flex: 1,
  },
  dayHeader: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    borderBottomColor: 'white',
  },
  dayHours: {
    flex: 1,
    color: 'white',
    margin: 5,
    textAlign: 'center'
  },
  timesheet: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

