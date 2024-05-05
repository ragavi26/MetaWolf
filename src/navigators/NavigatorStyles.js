import {StyleSheet} from 'react-native';

const MenuStyles = () =>
  StyleSheet.create({
    drawerMainView: {flex: 1, marginHorizontal: 10},
    drawerHeaderView: {
      flex: 1,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0e3051',
    },
    drawerHeaderContent: {
      flex: 1,
      height: 300,
      marginLeft: 20,
    },
    drawerButtonView: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
  });
const TabStyles = () =>
  StyleSheet.create({
    mainTabView: {flex: 1, alignItems: 'center'},
    tabItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingBottom: 1,
      height: 80,
      maxHeight: 120,
      backgroundColor: '#fff',
    },
  });
export {MenuStyles, TabStyles};
