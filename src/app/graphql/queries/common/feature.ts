import { gql } from '@apollo/client';

export const FEATURE = gql`
  fragment feature on ComponentCommonFeature {
    Header
    Blurb
    Icon
  }
`;
