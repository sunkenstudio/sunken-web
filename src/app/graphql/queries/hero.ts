import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_HERO = gql`
  ${Common.STYLED_IMAGE}
  ${Common.STYLED_BUTTON}

  fragment hero on HeroEntityResponse {
    data {
      id
      attributes {
        Header
        Subheader
        Text
        Image {
          ...styledImage
        }
        Variant
        BgImage {
          ...styledImage
        }
        Buttons {
          ...styledButton
        }
        SortOrder
      }
    }
  }
`;

export const UPDATE_HERO = gql`
  ${Common.STYLED_IMAGE}

  mutation UpdateHero(
    $id: ID!
    $header: String!
    $subheader: String!
    $text: JSON!
    $image: ComponentCommonImageInput!
  ) {
    updateHero(
      id: $id
      data: {
        Header: $header
        Subheader: $subheader
        Text: $text
        Image: $image
      }
    ) {
      data {
        attributes {
          Header
          Subheader
          Text
          Image {
            ...styledImage
          }
        }
      }
    }
  }
`;
