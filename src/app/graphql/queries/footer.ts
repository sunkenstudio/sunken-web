import { gql } from '@apollo/client';

export const GET_FOOTER = gql`
  fragment footer on FooterEntityResponse {
    data {
      attributes {
        Text
        FacebookUrl
        InstagramUrl
        TwitterUrl
      }
    }
  }
`;
