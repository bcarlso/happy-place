import React, {Component} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

export class MoodButton extends Component {
  constructor(props) {
    super(props);
    this.iconName = props.mood + '-o';
  }

  _onPressButton() {
    Alert.alert('Submitted')
  }

  _onLongPressButton() {
    Alert.alert('Give Feedback')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
          <View style={styles.button}>
            <Icon name={this.iconName} type='font-awesome' size={32} color='white'/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    width: 115,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#005978',
    borderRadius: 50
  },
  buttonText: {
    padding: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  }
});
