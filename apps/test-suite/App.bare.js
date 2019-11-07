import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SelectScreen from './screens/SelectScreen';
import RunTests from './screens/TestScreen';

const MainNavigator = createStackNavigator(
  {
    Select: { screen: SelectScreen, path: 'select/:tests' },
    RunTests,
  },
  {
    headerMode: 'screen',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
);

const App = createAppContainer(MainNavigator);

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
