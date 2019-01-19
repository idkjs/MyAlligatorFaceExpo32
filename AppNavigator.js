import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';
import Authentication from './Authentication';

const NavStack = createStackNavigator({
  Authentication: { screen: Authentication },
  Home: { screen: Home },
  Friends: { screen: Friends},
});
const AppNavigator = createAppContainer(NavStack);
export default AppNavigator;
