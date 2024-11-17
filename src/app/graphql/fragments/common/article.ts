import { gql } from '@apollo/client';

export const ARTICLE = gql`
  fragment article on ComponentCommonArticle {
    Title
    Description
    Images {
      data {
        attributes {
          url
        }
      }
    }
    Link
  }
`;
