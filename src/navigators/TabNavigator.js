import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/HomeScreen';
import IcTabHomeDefault from '../common/assets/tabHomeDefault.png';
import IcTabHomeActive from '../common/assets/tabHomeActive.png';
import IcTabEnergyDefault from '../common/assets/tabEnergyDefault.png';
import IcTabEnergyActive from '../common/assets/tabEnergyActive.png';
import IcTabAnalysisDefault from '../common/assets/tabAnalysisDefault.png';
import IcTabAnalysisActive from '../common/assets/tabAnalysisActive.png';
import IcTabMenuDefault from '../common/assets/tabMenuDefault.png';
import IcTabMenuActive from '../common/assets/tabMenuActive.png';
import IcTabProductionDefault from '../common/assets/tabProductionDefault.png';
import IcTabProductionActive from '../common/assets/tabProductionActive.png';
import {TabStyles} from './NavigatorStyles';

const Tab = createBottomTabNavigator();
const tabStyles = isFocused =>
  StyleSheet.create({
    tabImageStyle: {
      width: isFocused ? 50 : 30,
      height: isFocused ? 50 : 30,
      bottom: isFocused ? 25 : 0,
    },
  });
const renderTabImage = (image, styles) => {
  return (
    <Image source={image} style={styles.tabImageStyle} resizeMode="contain" />
  );
};
const TabNavigator = ({route}) => {
  let parentParams = route?.params ?? {};
  const [selectedTab, setSelectedTab] = useState('Home');
  const tabViewStyles = TabStyles();
  const _renderTabImage = (name, focused) => {
    const styles = tabStyles(focused);
    switch (name) {
      case 'Home':
        return renderTabImage(
          focused ? IcTabHomeActive : IcTabHomeDefault,
          styles,
        );
      case 'Energy':
        return renderTabImage(
          focused ? IcTabEnergyActive : IcTabEnergyDefault,
          styles,
        );
      case 'Production':
        return renderTabImage(
          focused ? IcTabProductionActive : IcTabProductionDefault,
          styles,
        );
      case 'Menu':
        return renderTabImage(
          focused ? IcTabMenuActive : IcTabMenuDefault,
          styles,
        );
      case 'Analysis':
        return renderTabImage(
          focused ? IcTabAnalysisActive : IcTabAnalysisDefault,
          styles,
        );
    }
  };

  const MyTabBar = ({state, descriptors, navigation}) => {
    const _renderTabItem = (route, index) => {
      const {options} = descriptors[route.key];
      let label = route.name;
      let isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({type: 'tabPress', target: route.key});
        if (!event.defaultPrevented) {
          setSelectedTab(label);
          // navigation.navigate(selectedTab);
          navigation.navigate(route.name, {from: 'tab'});
        }
      };

      return (
        <TouchableOpacity
          style={tabViewStyles.mainTabView}
          onPress={onPress}
          key={'MyTabBar_' + index}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}>
          <View
            activeOpacity={0.7}
            style={{
              position: 'absolute',
            }}>
            {_renderTabImage(label, isFocused)}
          </View>
          <Text
            style={{
              color: isFocused ? '#0e3051' : '#AFAFAF',
              fontSize: 12,
              top: 40,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={tabViewStyles.tabItemView}>
        {state.routes.map(_renderTabItem)}
      </View>
    );
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
        })}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={'Production'} component={HomeScreen} />
        <Tab.Screen name={'Energy'} component={HomeScreen} />
        <Tab.Screen
          name={'Home'}
          initialParams={parentParams}
          component={HomeScreen}
        />
        <Tab.Screen name={'Analysis'} component={HomeScreen} />
        <Tab.Screen name={'Menu'} component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
};
export default TabNavigator;
