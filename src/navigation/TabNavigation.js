import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import StackQuestions from './StackQuestions';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// components
import CustomTabBar from '../components/CustomTabBar';

const BottomTabNavigator = createBottomTabNavigator(
  {
    StackQuestions,
    StackSearch,
    StackLibrary
  },
  {
    initialRouteName: 'StackQuestions',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: '#A09090',
      style: {
        backgroundColor: '#EABFB9',
        borderTopWidth: 0
      }
    }
  }
);

export default BottomTabNavigator;
