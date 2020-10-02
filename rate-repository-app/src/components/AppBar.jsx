import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight / 2,
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName="Repositories" />
    </View>
  );
};

export default AppBar;
