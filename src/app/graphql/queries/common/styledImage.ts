import { gql } from '@apollo/client';

export const GET_STYLED_IMAGE = gql`
  fragment styledImage on ComponentCommonImage {
    media {
      data {
        id
        attributes {
          name
          url
        }
      }
    }
    alt
    border {
      width
      radius
      color
    }
    filter {
      color
      opacity
      grayscale
    }
  }
`;
