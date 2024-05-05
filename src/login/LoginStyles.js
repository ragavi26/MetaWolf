import {StyleSheet} from 'react-native';

export const LoginStyles = () =>
  StyleSheet.create({
    mainContainer: {flex: 1, backgroundColor: '#0e3051'},
    subContainer: {
      flex: 0.3,
      backgroundColor: '#0e3051',
    },
    logoView: {
      width: 100,
      height: 100,
      alignSelf: 'center',
    },
    mainTextView: {justifyContent: 'center', marginHorizontal: 20},
    welcomeTxt: {color: '#fff', fontSize: 18, fontWeight: '300'},
    metaWolfTxt: {color: '#FFDF00', fontSize: 28, fontWeight: 'bold'},
    startedText: {color: '#fff', fontSize: 18, fontWeight: '300'},
    metaLogoView: {
      flex: 0.7,
      backgroundColor: 'white',
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
    },
    metaLogoViewImage: {
      width: '40%',
      height: '20%',
      alignSelf: 'center',
    },
    forgotTxtView: {alignSelf: 'center'},
    sizeFont: {fontSize: 12},
    accessText: {fontSize: 12, color: '#000', fontWeight: 'black'},
    appleLogo: {
      marginTop: '20%',
      width: 50,
      height: 50,
      alignSelf: 'center',
    },
    inputView: {
      marginHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#AFAFAF',
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
    },
    inputText: {
      height: 50,
      color: '#777777',
    },
    singUp: {
      color: '#000',
      fontSize: 12,
      fontWeight: '600',
    },
    loginBtn: {
      width: '50%',
      backgroundColor: '#0e3051',
      borderRadius: 10,
      height: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    loginText: {
      color: '#FFDF00',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
