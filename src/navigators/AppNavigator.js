import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuNavigators from './MenuNavigator';
import {Platform} from 'react-native';
import LoginScreen from '../login/LoginScreen';

const Stack = createStackNavigator();
const AppNavigator = ({navigation, route}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        animationEnabled: Platform.select({
          ios: true,
          android: false,
        }),
        headerShown: false,
        detachPreviousScreen: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MenuNavigators} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
