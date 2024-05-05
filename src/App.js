import {StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './navigators/AppNavigator';

const App = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor={'#0e3051'}
        barStyle={'#fff'}
      />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current =
              navigationRef?.current?.getCurrentRoute()?.name;
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef?.current?.getCurrentRoute()?.name;

            if (previousRouteName !== currentRouteName) {
            }

            routeNameRef.current = currentRouteName;
          }}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
