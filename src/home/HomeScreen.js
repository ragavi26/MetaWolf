import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import logoHome from '../common/assets/logoHome.png';
import shareIcon from '../common/assets/Share.png';
import temperatureLogo from '../common/assets/temperature.png';
import cloudImage from '../common/assets/clouds.png';
import homeGroup from '../common/assets/homeGroup.png';
import weatherActive from '../common/assets/weatherActive.png';
import weatherDefault from '../common/assets/weatherDefault.png';
import chargeActive from '../common/assets/chargeActive.png';
import chargeDefault from '../common/assets/chargeDefault.png';
import batteryActive from '../common/assets/batteryActive.png';
import batteryDefault from '../common/assets/batteryDefault.png';
import plugInActive from '../common/assets/plugInActive.png';
import plugInDefault from '../common/assets/plugInDefault.png';
import menu from '../common/assets/menu.png';
import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {HomeScreenStyles} from './HomeScreenStyles';
import HomeConstants from './HomeConstants';

const HomeScreen = props => {
  const navigation = useNavigation();
  const routeName = props.route.name;
  const styles = HomeScreenStyles();

  useFocusEffect(
    useCallback(() => {
      routeName === 'Menu'
        ? navigation.dispatch(DrawerActions.openDrawer())
        : null;
    }, [routeName]),
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={menu}
              style={styles.headerIconView}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={logoHome}
            style={styles.headerLogoView}
            resizeMode="contain"
          />
          <TouchableOpacity style={{}}>
            <Image
              source={shareIcon}
              style={styles.headerIconView}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subHeaderView}>
        <View style={styles.subHeaderSubView}>
          <View style={styles.headerTempView}>
            <Image
              source={temperatureLogo}
              style={styles.tempIconView}
              resizeMode="contain"
            />
            <View style={styles.tempTextMainView}>
              <Text style={styles.tempTextView}>
                {HomeConstants.TEMP_VALUE}
              </Text>
            </View>
          </View>
          <View style={styles.cloudMainView}>
            <Image
              source={cloudImage}
              style={styles.cloudIconView}
              resizeMode="contain"
            />
            <View style={styles.cloudTextMainView}>
              <Text style={styles.cloudTextView}>
                {HomeConstants.CLOUD_VALUE}
              </Text>
              <Text style={styles.cloudTextSubView}>
                {HomeConstants.CLOUD_DEGREE}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.homeBodyView}>
          <View style={styles.homeBodySubView}>
            <View style={styles.homeBodyLeftView}>
              <View style={styles.homeBodyLeftSubView}>
                <Image
                  source={routeName === 'Home' ? weatherActive : weatherDefault}
                  style={{
                    width: routeName === 'Home' ? '120%' : '100%',
                    height: '100%',
                    bottom: 45,
                    left: routeName === 'Home' ? -3 : 5,
                  }}
                  resizeMode="contain"
                />
                <View style={styles.bodyTextMainView}>
                  <Text style={styles.bodyMainText}>
                    {HomeConstants.TEMP_KW_VALUE}
                    <Text style={styles.bodyMainSubText}>
                      {HomeConstants.KW}
                    </Text>
                  </Text>
                  <Text style={styles.bodySubText}>
                    {HomeConstants.SOLAR_POWER_NAME}
                  </Text>
                </View>
              </View>
              <View style={styles.homeBodyLeftSubView}>
                <Image
                  source={
                    routeName === 'Production' ? plugInActive : plugInDefault
                  }
                  style={{
                    width: routeName === 'Production' ? '120%' : '100%',
                    height: '100%',
                    bottom: 40,
                    left: routeName === 'Production' ? -2 : 5,
                  }}
                  resizeMode="contain"
                />
                <View style={styles.leftBodyBottomView}>
                  <Text style={styles.bodyBottomMainText}>
                    {HomeConstants.TEMP_CHARGE_VALUE}
                    <Text style={styles.bodyBottomMainSubText}>
                      {HomeConstants.KW}
                    </Text>
                  </Text>
                  <Text style={styles.bodyBottomSubText}>
                    {HomeConstants.CHARGING}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.homeBodyLeftSubView}>
              <Image
                source={homeGroup}
                style={styles.homeGroupIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.bodyMainRightView}>
              <View style={styles.homeBodyLeftSubView}>
                <Image
                  source={
                    routeName === 'Energy' ? batteryActive : batteryDefault
                  }
                  style={{
                    width: routeName === 'Energy' ? '120%' : '100%',
                    height: '100%',
                    bottom: 45,
                    right: routeName === 'Energy' ? 15 : 10,
                  }}
                  resizeMode="contain"
                />
                <View style={styles.rightMainTextView}>
                  <Text
                    style={{
                      color: '#FFDF00',
                      textAlign: 'center',
                      left: routeName === 'Energy' ? 5 : 0,
                      bottom: routeName === 'Energy' ? 5 : 0,
                    }}>
                    {HomeConstants.TEMP_ENERGY_VALUE}
                    <Text style={{fontSize: 10}}>
                      {HomeConstants.PERCENTAGE}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 8,
                      color: '#0e3051',
                      bottom: routeName === 'Energy' ? 8 : 5,
                      left: routeName === 'Energy' ? 5 : 0,
                    }}>
                    {HomeConstants.DISCHARGING}
                  </Text>
                </View>
              </View>
              <View style={styles.homeBodyLeftSubView}>
                <Image
                  source={
                    routeName === 'Analysis' ? chargeActive : chargeDefault
                  }
                  style={{
                    width: routeName === 'Analysis' ? '120%' : '100%',
                    height: '100%',
                    bottom: 40,
                    right: routeName === 'Analysis' ? 15 : 10,
                  }}
                  resizeMode="contain"
                />
                <View style={styles.analysisMainView}>
                  <Text
                    style={{
                      color: '#FFDF00',
                      textAlign: 'center',
                      left: routeName === 'Analysis' ? 5 : 0,
                    }}>
                    {HomeConstants.TEMP_ANALYSIS_VALUE}
                    <Text style={styles.analysisSubTextView}>
                      {HomeConstants.KW}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 8,
                      color: '#0e3051',
                      bottom: 5,
                      left: routeName === 'Analysis' ? 5 : 0,
                    }}>
                    {HomeConstants.GRID}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.systemStatusTextView}>
            <Text style={styles.systemStatusText}>
              {HomeConstants.SYSTEM_STATUS}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
