import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight / 2,
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.textSecondary,
    flexDirection: 'row',
  },
});

const AppBar = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppBar;
