import { gql } from '@apollo/client';

export const IMAGE_SCROLL = gql`
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
