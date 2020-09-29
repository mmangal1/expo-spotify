import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// navigation
import StackLogin from './StackLogin';

// screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const StackNavigator = createStackNavigator(
  {
    // Main Tab Navigation
    // /////////////////////////////////////////////////////////////////////////
    StackLogin,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalMusicPlayer,
    ModalMoreOptions: {
      screen: ModalMoreOptions,
      navigationOptions: {
        cardStyle: { backgroundColor: 'transparent' }
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'StackLogin',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
