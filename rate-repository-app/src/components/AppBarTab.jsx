import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  tab: { backgroundColor: 'transparent' },
});

const AppBarTab = ({ tabName }) => {
  return (
    <View style={styles.tab}>
      <Text style={styles.text}>{tabName}</Text>
    </View>
  );
};

export default AppBarTab;
