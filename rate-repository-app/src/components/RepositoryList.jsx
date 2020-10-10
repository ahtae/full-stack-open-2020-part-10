import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, error } = useRepositories();

  return <RepositoryListContainer repositories={repositories} error={error} />;
};

export default RepositoryList;
