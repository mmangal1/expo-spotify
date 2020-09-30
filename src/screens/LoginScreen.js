import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: null, password: null}
  };

  render() {

    handleEmail = (text) => {
      this.setState({ email: text })
    }

    return (
      <View style={styles.background} >
        <View style={gStyle.spacer48}>
          <Text style={styles.title}>App</Text>
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Email"
            placeholderTextColor = "#A09090"
            placeHolder
            keyboardType = "email-address"
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
            <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>
          <Text style={styles.signupBox}>
            <Text style={styles.dontHaveAccount}> Dont have an account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('StackSignup')}
              >
                <Text style={styles.signUp}> Sign Up </Text>
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
    marginTop: 170,
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

// const LoginScreen = ({ navigation }) => {
//   const theme = useTheme();

//   const handleEmail = (text) => {
//     this.setState({ email: text })
//   }
//   return (
//     <View style={styles.background} >
//       <View style={gStyle.spacer48}>
//         <Text style={styles.content}>Maikup</Text>
//         <TextInput
//           underlineColorAndroid = "transparent"
//           placeholder = "Email"
//           placeholderTextColor = "#9a73ef"
//           autoCapitalize = "none"
//           onChangeText = {this.handleEmail}
//         />
//         <Touch
//           onPress={() => navigation.navigate('StackSignup')}
//           text="Signup"
//         />
//       </View>
//     </View>
//   );
// };

// LoginScreen.navigationOptions = {
//   //headerTitleStyle: gStyle.headerTitleStyle,
//   //title: 'Login Screen'
//   headerVisible: false, 
//   headerShown: null,
// };

// LoginScreen.propTypes = {
//   // required
//   navigation: PropTypes.object.isRequired
// };

export default LoginScreen;