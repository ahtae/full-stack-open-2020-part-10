import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { margin: 20 },
  valueText: { fontWeight: 'bold', textAlign: 'center' },
  labelText: {
    color: 'gray',
    textAlign: 'center',
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
