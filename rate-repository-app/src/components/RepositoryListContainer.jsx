import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RepositoryItem from './RepositoryItem';
import Notify from './Notify';
import { useHistory } from 'react-router-native';

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

const RepositoryList = ({ repositories, error }) => {
  const history = useHistory();
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
        renderItem={(item) => (
          <TouchableOpacity onPress={() => history.push(`\:${item.item.id}`)}>
            <RepositoryItem item={item.item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RepositoryList;
