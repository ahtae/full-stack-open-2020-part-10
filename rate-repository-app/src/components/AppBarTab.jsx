import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text style={styles.text}>{tabName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
