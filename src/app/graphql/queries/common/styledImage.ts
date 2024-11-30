import { gql } from '@apollo/client';

export const GET_STYLED_IMAGE = gql`
  fragment styledImage on ComponentCommonImage {
    Media {
      data {
        id
        attributes {
          name
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
