import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Notify from './Notify';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, error } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  if (!repositories) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  return (
    <View>
      <Notify errorMessage={error ? error.message : null} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) => <RepositoryItem item={item.item} />}
      />
    </View>
  );
};

export default RepositoryList;
