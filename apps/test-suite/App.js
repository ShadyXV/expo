import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SelectScreen from './screens/SelectScreen';
import TestScreen from './screens/TestScreen';

const MainNavigator = createStackNavigator(
  {
    Select: SelectScreen,
    RunTests: TestScreen,
  },
  { headerMode: 'screen' }
);

export default createAppContainer(MainNavigator);
