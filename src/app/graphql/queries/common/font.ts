import { gql } from '@apollo/client';

export const FONT = gql`
  fragment font on ComponentCommonFont {
    Url
    Family
  }
`;
