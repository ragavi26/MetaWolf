import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Button, Dimensions, Text, View} from 'react-native';

import TabNavigator from './TabNavigator';
import {useNavigation} from '@react-navigation/native';
import {MenuStyles} from './NavigatorStyles';
import NavigationConstants from './NavigationConstants';

const Drawer = createDrawerNavigator();
const Tabs = ['Production', 'Energy', 'Home', 'Analysis', 'Menu'];
const MenuNavigators = ({route}) => {
  const navigation = useNavigation();
  const styles = MenuStyles();
  const DrawerContent = props => {
    return (
      <DrawerContentScrollView
        bounces={false}
        {...props}
        style={styles.drawerMainView}>
        <View style={styles.drawerHeaderView}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            {NavigationConstants.WELCOME_TO_METAWOLF}
          </Text>
        </View>
        <View style={styles.drawerHeaderContent}>
          {/* Can uncomnet below to put rows */}
          {/* {Tabs.map((obj, index) => {
            return (
              <TouchableOpacity
                key={'Drawer Button' + obj}
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                }}>
                <Text>{obj}</Text>
              </TouchableOpacity>
            );
          })} */}
        </View>
        <View style={styles.drawerButtonView}>
          <Button
            title="Logout"
            color={'#0e3051'}
            onPress={() => navigation.replace('Login')}></Button>
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerStyle: {
          width: Dimensions.get('window').width - 80,
        },
      }}>
      <Drawer.Screen
        name={'Tab'}
        initialParams={route?.params ?? {}}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default MenuNavigators;
