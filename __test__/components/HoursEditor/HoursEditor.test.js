import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import HoursEditor, {DOWN_ICON, UP_ICON} from '../../../App/components/HoursEditor/HoursEditor';
import {TextInput} from "react-native";

it('renders correctly', () => {
  const wtf = renderer.create(
    <HoursEditor/>
  );

  console.log(shallow(<HoursEditor/>));
});

describe('Hours editor', () => {
  let editor;

  beforeEach(() => {
    editor = shallow(<HoursEditor/>);
  });

  it('has a property to set the initial value', () => {
    expect(editor.find(TextInput).exists()).to.equal(true);

  });

  it('contains an input field for entering hours', () => {
    expect(editor.find(TextInput).exists()).to.equal(true);
  });

  it('contains a button for increasing hours worked', () => {
    expect(editor.find(iconNamed(UP_ICON)).exists()).to.equal(true);
  });

  it('contains a button for decreasing hours worked', () => {
    expect(editor.find(iconNamed(DOWN_ICON)).exists()).to.equal(true);
  });

  function iconNamed(icon) {
    return `Icon[name="${icon}"]`;
  }
});


