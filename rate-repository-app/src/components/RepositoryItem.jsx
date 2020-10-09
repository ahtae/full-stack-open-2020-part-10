import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryStatistics from './RepositoryStatistics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
  },
  avatar: {
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  description: {
    flex: 1,
    marginTop: 10,
    color: 'gray',
    flexWrap: 'wrap',
    fontFamily: theme.fonts.main,
  },
  language: {
    marginTop: 10,
    color: theme.colors.secondary,
    padding: 3,
    fontFamily: theme.fonts.main,
  },
  languageContainer: {
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: theme.fonts.main,
  },
  textContainer: { margin: 18, flex: 1 },
  details: { flexDirection: 'row' },
});

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image
          testID="ownerAvatarUrl"
          style={styles.avatar}
          source={{ uri: ownerAvatarUrl }}
        />
        <View style={styles.textContainer}>
          <Text testID="fullName" style={styles.fullName}>
            {fullName}
          </Text>
          <Text testID="description" style={styles.description}>
            {description}
          </Text>
          <View
            style={{
              ...styles.languageContainer,
              width: language.length * 8.9,
            }}
          >
            <Text
              testID="language"
              style={{ ...styles.language, width: language.length * 11 }}
            >
              {language}
            </Text>
          </View>
        </View>
      </View>
      <RepositoryStatistics
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
