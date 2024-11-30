import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_BRAND = gql`
  ${Common.GET_FONT}

  fragment brand on BrandEntityResponse {
    data {
      attributes {
        Primary
        Secondary
        Accent
        Light
        Dark
        Fonts {
          ...font
        }
        Favicon {
          data {
            attributes {
              url
            }
          }
        }
        CompanyName
      }
    }
  }
`;
