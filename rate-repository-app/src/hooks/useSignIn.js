import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
