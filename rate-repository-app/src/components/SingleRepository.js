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
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
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
  ratingText: { padding: 10, color: theme.colors.primary },
  ratingContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    margin: 10,
  },
  username: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 15,
  },
  paragraph: { marginLeft: 10, marginRight: 10 },
  date: { color: '#2F4F4F' },
  textContainer: { flexDirection: 'row', paddingTop: 5, width: '90%' },
  text: { flexShrink: 1, flexWrap: 'wrap' },
});

const RepositoryInfo = ({ repository, error }) => {
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.paragraph}>
        <View>
          <Text style={styles.username}>{review.user.username}</Text>
        </View>
        <View>
          <Text style={styles.date}>
            {format(new Date(review.createdAt), 'MM.dd.yyyy')}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const id = useParams().id.slice(1);
  const data = useRepository(id);
  const { repository, error } = data;

  if (!repository && !error) {
    return <Text style={styles.error}>Loading...</Text>;
  }

  const { reviews } = repository;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={repository} error={error} />
      )}
    />
  );
};

export default SingleRepository;
