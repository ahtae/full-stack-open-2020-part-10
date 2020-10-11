import React from 'react';
import RepositoryItem from './RepositoryItem';
import {
  TouchableOpacity,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import Notify from './Notify';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: { backgroundColor: 'white' },
  button: {
    backgroundColor: 'white',
    backgroundColor: theme.colors.primary,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

const SingleRepository = () => {
  const id = useParams().id.slice(1);
  const data = useRepository(id);
  const { repository, error } = data;

  if (!repository && !error) {
    return <Text style={styles.error}>Loading...</Text>;
  }

  const handleButtonClick = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View>
      <Notify errorMessage={error ? error.message : null} />
      <RepositoryItem item={repository} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Open in GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleRepository;
