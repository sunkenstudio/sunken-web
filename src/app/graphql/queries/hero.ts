import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_HERO = gql`
  ${Common.GET_STYLED_IMAGE}
  ${Common.GET_STYLED_BUTTON}

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
  ${Common.GET_STYLED_IMAGE}
  ${Common.GET_STYLED_BUTTON}

  mutation UpdateHero(
    $id: ID!
    $header: String!
    $subheader: String!
    $text: JSON!
    $image: ComponentCommonImageInput!
    $bgImage: ComponentCommonImageInput!
    $buttons: [ComponentCommonButtonInput!]!
  ) {
    updateHero(
      id: $id
      data: {
        Header: $header
        Subheader: $subheader
        Text: $text
        Image: $image
        BgImage: $bgImage
        Buttons: $buttons
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
          BgImage {
            ...styledImage
          }
          Buttons {
            ...styledButton
          }
        }
      }
    }
  }
`;
