import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
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
  description: { flex: 1, marginTop: 10, color: 'gray', flexWrap: 'wrap' },
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
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={{ margin: 18, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: theme.colors.primary,
              borderRadius: 10,
              width: language.length * 8.9,
            }}
          >
            <Text
              style={{
                marginTop: 10,
                color: theme.colors.secondary,
                width: language.length * 11,
                padding: 3,
              }}
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
