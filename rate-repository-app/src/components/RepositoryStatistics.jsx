import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryStatistic from './RepositoryStatistic';

const styles = StyleSheet.create({
  container: { marginLeft: 35, flexDirection: 'row' },
  avatar: {
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  description: { flex: 1, marginTop: 10, color: 'gray', flexWrap: 'wrap' },
});

const RepositoryStatistics = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.container}>
      <RepositoryStatistic value={stargazersCount} label="Stars" />
      <RepositoryStatistic value={forksCount} label="Forks" />
      <RepositoryStatistic value={reviewCount} label="Reviews" />
      <RepositoryStatistic value={ratingAverage} label="Rating" />
    </View>
  );
};

export default RepositoryStatistics;
