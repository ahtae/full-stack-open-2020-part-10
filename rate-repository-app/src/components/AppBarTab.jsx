import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-native';
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: 'transparent'
  }
});

const AppBarTab = ({ tabName }) => {
  return <View style={{backgroundColor: 'transparent'}}>
    <Text style={styles.text}>{tabName}</Text>
    </View>
};

export default AppBarTab;
