import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';

export const UP_ICON = 'ios-arrow-dropup';
export const DOWN_ICON = 'ios-arrow-dropdown';

export default class EditTimeSheet extends Component {
  render() {
    return (
      <View>
        <Icon name={UP_ICON} type={'ionicon'}/>
        <TextInput/>
        <Icon name={DOWN_ICON} type={'ionicon'}/>
      </View>
    );
  }
}