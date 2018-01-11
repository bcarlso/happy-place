import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import ScreenSubmitTimeSheet from './screens/SubmitTimeSheet/SubmitTimeSheet.js';
import {Icon} from 'react-native-elements';
import {PlaceHolder} from "./screens/PlaceHolder/PlaceHolder";
import {ColorPallette} from "./components/ColorPallette/ColorPallette";
import SubmitTimeSheet from "./screens/SubmitTimeSheet/SubmitTimeSheet";
import EditTimeSheet from "./screens/EditTimeSheet/EditTimeSheet";

const SubmitTimeSheetStack = StackNavigator({
  Home: {
    screen: SubmitTimeSheet,
  },
  Edit: {
    path: 'timesheet/:timeframe',
    screen: EditTimeSheet,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.timeframe}`
    })
  },
});

const iconSize = 32;
export const Tabs = TabNavigator({
    SubmitTimeSheet: {
      screen: SubmitTimeSheetStack,
      navigationOptions: {
        tabBarLabel: 'Timesheet',
        tabBarIcon: ({tintColor}) => <Icon name="clock-o" type='font-awesome' size={iconSize} color={tintColor}/>
      },
    },
    News: {
      screen: PlaceHolder,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({tintColor}) => <Icon name="newspaper-o" type='font-awesome' size={iconSize} color={tintColor}/>
      },
    },
    Profile: {
      screen: PlaceHolder,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => <Icon name="user-o" type='font-awesome' size={iconSize} color={tintColor}/>
      },
    },
  }, {
    tabBarOptions: {
      animationEnabled: true,
      activeTintColor:
        ColorPallette.BLUE,
    }
  }
  )
;

export default class App extends Component {
  render() {
    return (<Tabs/>);
  }
}