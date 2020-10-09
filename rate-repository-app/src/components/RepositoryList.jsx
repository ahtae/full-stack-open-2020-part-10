import React from 'react';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories, error } = useRepositories();

  return <RepositoryListContainer repositories={repositories} error={error} />;
};

export default RepositoryList;

