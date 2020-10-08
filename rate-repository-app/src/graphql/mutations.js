import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation Authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
