import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import TabNavigation from '../navigation/TabNavigation'
// icons
import SvgTabHome from '../components/icons/Svg.TabHome';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

//multi-stack
export default createStackNavigator(
  {
    SignUpScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'SignUp',
      tabBarIcon: Icon
    }
  }
);