import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import AuthStorage from '../../src/utils/authStorage';

const authStorage = new AuthStorage();

const createApolloClient = () => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: Constants.manifest.extra.apolloUrl,
  });
};

export default createApolloClient;
