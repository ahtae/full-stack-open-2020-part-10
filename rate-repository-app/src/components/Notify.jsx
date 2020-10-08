import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  error: {
    color: theme.colors.error,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }

  return <Text style={styles.error}>{errorMessage}</Text>;
};

export default Notify;
