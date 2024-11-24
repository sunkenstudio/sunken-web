import { gql } from '@apollo/client';
import * as Common from './common';

export const HERO = gql`
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
