import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: { margin: 20 },
  valueText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: theme.fonts.main,
  },
  labelText: {
    color: 'gray',
    textAlign: 'center',
    fontFamily: theme.fonts.main,
  },
});

const RepositoryStatistic = ({ label, value }) => {
  const roundedValue =
    value > 999 ? `${Math.abs(value / 1000).toFixed(1)}k` : value;

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{roundedValue}</Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

export default RepositoryStatistic;
