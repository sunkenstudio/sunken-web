import { gql } from '@apollo/client';

export const GET_FONT = gql`
  fragment font on ComponentCommonFont {
    Url
    Family
  }
`;
