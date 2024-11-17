import { gql } from '@apollo/client';

export const FOOTER = gql`
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
