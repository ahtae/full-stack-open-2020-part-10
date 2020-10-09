import { useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { AUTHORIZE } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    await apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
