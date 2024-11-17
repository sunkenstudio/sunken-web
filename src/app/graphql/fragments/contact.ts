import { gql } from '@apollo/client';
import * as Common from './common';

export const CONTACT = gql`
  ${Common.STYLED_IMAGE}

  fragment contact on ContactEntityResponse {
    data {
      attributes {
        Fields
        SendTo
        Header
        BgColor
        BgImage {
          ...styledImage
        }
      }
    }
  }
`;
