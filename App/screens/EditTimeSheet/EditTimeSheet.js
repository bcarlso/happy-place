import React, {Component} from 'react';
import {Picker, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {ColorPallette} from "../../components/ColorPallette/ColorPallette";

export default class EditTimeSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.week}>
          <DayEditor/>
        </View>
      </View>);
  }
}

class DayEditor extends Component {
  constructor(props) {
    super(props);
    this.day = props.for;
    this.hours = 80.5;
    this.state = {

      Sunday: {
        shortName: 'Sun',
        date: '12/31/2017',
        hours: 0,
        project: 'CMS',
      }, Monday: {
        shortName: 'Mon',
        date: '01/01/2018',
        hours: 8.0,
        project: 'CMS',
      }, Tuesday: {
        shortName: 'Tue',
        date: '01/02/2018',
        hours: 8.5,
        project: 'CMS',
      }, Wednesday: {
        shortName: 'Wed',
        date: '01/03/2018',
        hours: 8,
        project: 'CMS',
      }, Thursday: {
        shortName: 'Thu',
        date: '01/04/2018',
        hours: 7,
        project: 'CMS',
      }, Friday: {
        shortName: 'Fri',
        date: '01/05/2018',
        hours: 8.5,
        project: 'CMS',
      }, Saturday: {
        shortName: 'Sat',
        date: '01/06/2018',
        hours: 0,
        project: 'CMS',
      }
    }
  }

  render() {
    return Object.keys(this.state).map((day) => {
      return (<View key={day} style={styles.dayEditor}>
        <View style={styles.dayEditorHeader}>
          <Text key={day + 'Header'} style={styles.dayEditorHeaderText}>{day} ({this.state[day].date})</Text>
        </View>
        <View key={day + 'Details'} style={{flex: 1, flexDirection: 'row'}}>
          <View key={day + 'TimeDetails'} style={hoursEditor.container}>
            <Icon key={day + 'Up'} style={hoursEditor.arrow} name='ios-arrow-dropup' type='ionicon'/>
            <TextInput key={day + 'Hours'} style={hoursEditor.hours} value={'' + this.state[day].hours}/>
            <Icon key={day + 'Down'} style={hoursEditor.arrow} name='ios-arrow-dropdown' type='ionicon'/>
          </View>
          <View style={{flex: 1}}>
            <Picker style={{backgroundColor: 'black'}} key={day + 'Project'}
                    selectedValue={this.state[day].project}
            >
              <Picker.Item label="CMS" value="java"/>
              <Picker.Item label="ADS" value="js"/>
            </Picker>
          </View>
        </View>
      </View>);
    });
  }
}

export class HoursEditor extends Component {
  constructor(props) {
    super(props);
    this.day = props.for;
  }
  render() {
    return (
      <View key={this.day + 'TimeDetails'} style={hoursEditor.container}>
        <Icon key={this.day + 'Up'} style={hoursEditor.arrow} name='ios-arrow-dropup' type='ionicon'/>
        <TextInput key={this.day + 'Hours'} style={hoursEditor.hours} value={'' + this.state[this.day].hours}/>
        <Icon key={this.day + 'Down'} style={hoursEditor.arrow} name='ios-arrow-dropdown' type='ionicon'/>
      </View>
    );
  }
}


const hoursEditor = StyleSheet.create({
  container: {
    margin: 5,
    flex: 0.25,
    flexDirection: 'row'
  },
  hours: {
    flex: 1,
    textAlign: 'center'
  },
  arrow: {
    flex: 0.25,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  week: {
    flex: 1,
    alignItems: 'stretch',
  },
  dayEditor: {
    flex: 1,
  },
  dayEditorHeader: {
    flex: 1,
    backgroundColor: ColorPallette.RED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayEditorHeaderText: {
    color: ColorPallette.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayEditorProject: {
    flex: 1,
    textAlign: 'left'
  },
  timesheet: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

