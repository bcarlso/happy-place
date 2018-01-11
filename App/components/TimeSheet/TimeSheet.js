import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {ColorPallette} from '../ColorPallette/ColorPallette'

export default class TimeSheet extends Component {
  constructor(props) {
    super(props);
  }
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
          <EditDetails navigation={this.props.navigation}/>
        </View>
      </View>);
  }
}

class EditDetails extends Component {
  constructor(props) {
    super(props);
  }

  _editPressed() {
    this.props.navigation.navigate('Edit', {timeframe: 'Today'});
  }

  render() {
    return (<TouchableOpacity style={styles.edit} onPress={this._editPressed.bind(this)}>
      <Icon name="edit" type='font-awesome' size={32} color='white'/>
    </TouchableOpacity>);
  }
}

class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.day = props.for;
    this.hours = 0.0;
  }

  render() {
    return (<View style={styles.day}>
      <Text style={styles.dayEditorHeader}>{this.day}</Text>
      <Text style={styles.dayHours}>{this.hours}</Text>
    </View>);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallette.RED,
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
  dayEditorHeader: {
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

