import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import StackSignup from './StackSignup';
import TabNavigator from './TabNavigation';

// icons
import SvgTabHome from '../components/icons/Svg.TabHome';
import { createSwitchNavigator } from 'react-navigation';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// const Login = createStackNavigator(
//   {
//     LoginScreen
//   }
// )

// const SignUp = createStackNavigator(
//   {
//     SignUpScreen
//   }
// )

const StackSignupNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpScreen
  },
  Tab: {
    screen: TabNavigator
  }
});

//multi-stack
const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions : {
      headerVisible: false, 
      headerShown: false,
    }
  },
  StackSignup: {
    screen: StackSignupNavigator
  }
});

// const Login = createAppContainer(LoginNavigator);

export default LoginNavigator;