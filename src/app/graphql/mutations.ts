import { gql } from '@apollo/client';
import * as Fragments from './fragments';

export const UPDATE_HERO = gql`
  ${Fragments.HERO}

  mutation UpdateHero(
    $id: ID!
    $header: String!
    $subheader: String!
    $text: JSON!
  ) {
    updateHero(
      id: $id
      data: { Header: $header, Subheader: $subheader, Text: $text }
    ) {
      ...hero
    }
  }
`;
