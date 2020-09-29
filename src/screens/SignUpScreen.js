import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import NavigationBack from '../navigation/NavigationBack'
import Touch from '../components/Touch';

const SignUpScreen = ({navigation}) => {
  const theme = useTheme();

  console.log(navigation);
  return (
    // <ScrollView
    //   contentContainerStyle={gStyle.contentContainer}
    //   style={gStyle.container[theme]}
    // >
    <View>
      <Text>SignUp</Text>
      <View style={gStyle.spacer64} />
      <Touch
       onPress={() => navigation.navigate('Tab')}
       text="Login"
     />
    </View>

    // </ScrollView>
  );
};

// SignUpScreen.navigationOptions = ({ navigation }) => ({
//   headerLeft: () => <NavigationBack navigation={navigation} />,
//   headerRight: () => <View style={{ flex: 1 }} />,
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'SignUpScreen'
// });

SignUpScreen.navigationOptions = {
    headerLeft: () => null,
    headerTitleStyle: gStyle.headerTitleStyle,
    title: 'SignUpScreen'
  };
  
SignUpScreen.propTypes = {
    // required
    navigation: PropTypes.object.isRequired
  };

export default SignUpScreen;