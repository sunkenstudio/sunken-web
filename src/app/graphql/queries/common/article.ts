import { gql } from '@apollo/client';

export const GET_ARTICLE = gql`
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
