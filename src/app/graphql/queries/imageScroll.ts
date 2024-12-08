import { gql } from '@apollo/client';

export const GET_IMAGE_SCROLL = gql`
  fragment imageScroll on ImageScrollEntityResponse {
    data {
      attributes {
        Header
        BgColor
        Color
        Speed
        SortOrder
        Images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
`;
