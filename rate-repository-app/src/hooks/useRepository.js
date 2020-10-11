import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {
  const [repository, setRepository] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
  });

  useEffect(() => {
    if (!loading && data) {
      setRepository(data.repository);
    }
  }, [data]);

  return {
    repository,
    error,
  };
};

export default useRepository;
