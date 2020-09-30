import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import NavigationBack from '../navigation/NavigationBack'
import Touch from '../components/Touch';


class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <View style={styles.background} >
        <View style={gStyle.spacer48}>
          <Text style={styles.title}>App</Text>
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Full Name"
            placeholderTextColor = "#A09090"
            placeHolder
            keyboardType = "default"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}
          />
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Email"
            placeholderTextColor = "#A09090"
            keyboardType = "email-address"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}
          />
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Username"
            placeholderTextColor = "#A09090"
            keyboardType = "default"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}
          />
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Password"
            placeholderTextColor = "#A09090"
            keyboardType = "default"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Tab')}
            style = {styles.loginButton}
          >
            <Text style={styles.loginText}> Sign Up </Text>
          </TouchableOpacity>
          <Text style={styles.signupBox}>
            <Text style={styles.dontHaveAccount}> Already have an account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.signUp}> Login </Text>
              </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EABFB9'
  },
  title: {
    textAlign: 'center',
    marginTop: 150,
    fontSize: 50,
    color: '#FEF2F2',
    fontFamily: 'Zapfino'
  },
  input: {
    margin: 10,
    height: 45,
    borderColor: '#F5DDDA',
    backgroundColor: '#F5DDDA',
    marginRight: 40,
    marginLeft: 40,
    borderWidth: 1,
    fontSize: 18
  },
  loginButton: {
    margin: 10,
    height: 40,
    borderColor: '#F5DDDA',
    backgroundColor: '#F5DDDA',
    marginRight: 75,
    marginLeft: 75,
    borderWidth: 1,
    textShadowColor: "#A09090",
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: "#A09090",
    textAlign: 'center',
    fontSize: 18
  },
  signupBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dontHaveAccount: {
    color: "#FEF2F2",
    fontSize: 18,
    fontFamily: "Arial-BoldMT",
    textAlign: 'center',
  },
  signUp: {
    color: "#FEF2F2",
    fontSize: 16,
    fontFamily: "Arial-BoldMT",
    textDecorationLine: "underline"
  }
});


// const SignUpScreen = ({navigation}) => {
//   const theme = useTheme();

//   console.log(navigation);
//   return (
//     // <ScrollView
//     //   contentContainerStyle={gStyle.contentContainer}
//     //   style={gStyle.container[theme]}
//     // >
//     <View>
//       <Text>SignUp</Text>
//       <View style={gStyle.spacer64} />
//       <Touch
//        onPress={() => navigation.navigate('Tab')}
//        text="Login"
//      />
//     </View>

//     // </ScrollView>
//   );
// };

// // SignUpScreen.navigationOptions = ({ navigation }) => ({
// //   headerLeft: () => <NavigationBack navigation={navigation} />,
// //   headerRight: () => <View style={{ flex: 1 }} />,
// //   headerTitleStyle: gStyle.headerTitleStyle,
// //   title: 'SignUpScreen'
// // });

// SignUpScreen.navigationOptions = {
//     headerLeft: () => null,
//     headerTitleStyle: gStyle.headerTitleStyle,
//     title: 'SignUpScreen'
//   };
  
// SignUpScreen.propTypes = {
//     // required
//     navigation: PropTypes.object.isRequired
//   };

export default SignUpScreen;