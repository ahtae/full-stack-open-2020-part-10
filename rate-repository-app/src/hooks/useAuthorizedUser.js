import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const [authorizedUser, setAuthorizedUser] = useState();
  const { data, error, loading } = useQuery(GET_AUTHORIZED_USER);

  useEffect(() => {
    if (!loading) {
      setAuthorizedUser(data.authorizedUser);
    }
  }, [data]);

  return {
    authorizedUser,
    error,
  };
};

export default useAuthorizedUser;
