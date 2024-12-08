import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_CONTACT = gql`
  ${Common.GET_STYLED_IMAGE}

  fragment contact on ContactEntityResponse {
    data {
      attributes {
        Fields
        SendTo
        Header
        BgColor
        SortOrder
        BgImage {
          ...styledImage
        }
      }
    }
  }
`;
