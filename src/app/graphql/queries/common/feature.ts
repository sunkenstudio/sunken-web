import { gql } from '@apollo/client';

export const GET_FEATURE = gql`
  fragment feature on ComponentCommonFeature {
    Header
    Blurb
    Icon
  }
`;
