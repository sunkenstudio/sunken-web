import { gql } from '@apollo/client';

export const STYLED_IMAGE = gql`
  fragment styledImage on ComponentCommonImage {
    Media {
      data {
        attributes {
          url
        }
      }
    }
    Alt
    Border {
      Width
      Radius
      Color
    }
    Filter {
      Color
      Opacity
      Grayscale
    }
  }
`;
