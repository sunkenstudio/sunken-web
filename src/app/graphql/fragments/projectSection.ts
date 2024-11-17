import { gql } from '@apollo/client';
import * as Common from './common';

export const PROJECT_SECTION = gql`
  ${Common.ARTICLE}

  fragment projectSection on ProjectSectionEntityResponse {
    data {
      attributes {
        Header
        BgColor
        Color
        Articles {
          ...article
        }
      }
    }
  }
`;
