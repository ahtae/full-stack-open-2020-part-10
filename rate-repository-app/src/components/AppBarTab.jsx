import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text style={styles.text}>{tabName}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
