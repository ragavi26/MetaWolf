import {StyleSheet} from 'react-native';

export const HomeScreenStyles = () =>
  StyleSheet.create({
    mainView: {flex: 1, backgroundColor: '#fff'},
    subView: {
      flex: 0.25,
      backgroundColor: '#0e3051',
      borderBottomLeftRadius: 250,
      borderBottomRightRadius: 250,
      transform: [{scaleX: 1.2}],
    },
    headerView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    headerIconView: {
      width: 25,
      height: 25,
    },
    headerLogoView: {
      width: 150,
      height: 150,
    },
    subHeaderView: {
      flex: 0.75,
      marginHorizontal: 20,
    },
    subHeaderSubView: {flex: 1, flexDirection: 'row'},
    headerTempView: {
      flex: 1,
      marginLeft: 20,
      alignSelf: 'center',
      flexDirection: 'row',
    },
    tempIconView: {
      width: 60,
      height: 60,
    },
    tempTextMainView: {
      height: 22,
      width: 22,
      borderRadius: 11,
      backgroundColor: 'red',
      bottom: 15,
      right: 5,
    },
    tempTextView: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 15,
    },
    cloudMainView: {
      flex: 1,
      marginRight: 20,
      alignSelf: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    cloudIconView: {
      width: 70,
      height: 70,
    },
    cloudTextMainView: {
      height: 20,
      width: 20,
      bottom: 46,
      right: 28,
      flexDirection: 'row',
    },
    cloudTextView: {
      textAlign: 'center',
      color: '#0e3051',
      fontSize: 17,
      fontWeight: 'bold',
    },
    cloudTextSubView: {
      textAlign: 'center',
      color: '#0e3051',
      fontSize: 17,
      fontWeight: 'bold',
    },
    homeBodyView: {flex: 3},
    homeBodySubView: {
      flex: 1,
      flexDirection: 'row',
    },
    homeBodyLeftView: {
      flex: 0.5,
    },
    homeBodyLeftSubView: {flex: 1},
    bodyTextMainView: {
      position: 'absolute',
      top: '27%',
      alignSelf: 'center',
    },
    bodyMainText: {
      color: '#FFDF00',
      textAlign: 'center',
      left: 5,
    },
    bodyMainSubText: {fontSize: 10},
    bodySubText: {
      textAlign: 'center',
      fontSize: 8,
      color: '#0e3051',
      bottom: 5,
      left: 5,
    },
    leftBodyBottomView: {
      position: 'absolute',
      top: '35%',
      alignSelf: 'center',
    },
    bodyBottomMainText: {
      color: '#FFDF00',
      textAlign: 'center',
      left: 5,
    },
    bodyBottomMainSubText: {fontSize: 10},
    bodyBottomSubText: {
      textAlign: 'center',
      fontSize: 8,
      color: '#0e3051',
      bottom: 5,
      left: 5,
    },
    homeGroupIcon: {
      width: '100%',
      height: '80%',
    },
    bodyMainRightView: {
      flex: 0.5,
    },
    rightMainTextView: {
      position: 'absolute',
      width: '75%',
      top: '30%',
    },
    analysisMainView: {
      position: 'absolute',
      width: '75%',
      top: '35%',
    },
    analysisMainTextView: {},
    analysisSubTextView: {fontSize: 10},
    systemStatusTextView: {bottom: 80},
    systemStatusText: {
      fontSize: 22,
      color: '#AFAFAF',
      textTransform: 'capitalize',
      textAlign: 'center',
    },
  });
