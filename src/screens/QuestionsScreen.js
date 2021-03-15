import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import { firebase } from '../firebase/config';

// components
import NavigationBack from '../navigation/NavigationBack'
import Touch from '../components/Touch';


class QuestionsScreen extends React.Component {
  constructor(props) {
    super();
  };


  render() {

    return (
      <View style={styles.background} >
        <View style={gStyle.spacer48}>
          <View style={styles.searchBackground}></View>
          <View style={styles.homePageType}></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  searchBackground: {
    textAlign: 'center',
    marginTop: 0,
    height: 75,
    borderColor: '#EABFB9',
    backgroundColor: '#EABFB9',
    marginRight: 0,
    marginLeft: 0,
    borderWidth: 1,
    fontSize: 18
  },
  homePageType: {
    textAlign: 'center',
    marginTop: 0,
    height: 50,
    borderColor: '#F6EBE9',
    backgroundColor: '#F6EBE9',
    marginRight: 0,
    marginLeft: 0,
    borderWidth: 1,
    fontSize: 18
  },
  
});

export default QuestionsScreen;