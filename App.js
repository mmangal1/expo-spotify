import * as React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { func } from './src/constants';
import { firebase } from './src/firebase/config';

// main navigation stack
import Stack from './src/navigation/Stack';

// Login navigation
import LoggedInStack from './src/navigation/LoggedInStack';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentSongData: {
      //   album: 'Swimming',
      //   artist: 'Mac Miller',
      //   image: 'swimming',
      //   length: 312,
      //   title: 'So It Goes'
      // },
      isLoading: true,
      user: null,
      loggedIn: null,
      // toggleTabBar: false
    };

  //   this.changeSong = this.changeSong.bind(this);
  //   this.setToggleTabBar = this.setToggleTabBar.bind(this);
  // }

  // setToggleTabBar() {
  //   this.setState(({ toggleTabBar }) => ({
  //     toggleTabBar: !toggleTabBar
  //   }));
  // }

  // changeSong(data) {
  //   this.setState({
  //     currentSongData: data
  //   });
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const { currentSongData, isLoading, toggleTabBar } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    if (this.state.loggedIn) {
      console.log("logged in");
      return (
        <LoggedInStack
          screenProps={{
            user: this.state.user
          }}
        />
      )
    }
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />

        <Stack
          screenProps={{
            currentSongData,
            changeSong: this.changeSong,
            setToggleTabBar: this.setToggleTabBar,
            toggleTabBarState: toggleTabBar
          }}
        />
      </React.Fragment>
    );
  }
}
