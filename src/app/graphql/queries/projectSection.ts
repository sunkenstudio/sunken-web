import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_PROJECT_SECTION = gql`
  ${Common.GET_ARTICLE}

  fragment projectSection on ProjectSectionEntityResponse {
    data {
      attributes {
        Header
        BgColor
        Color
        SortOrder
        Articles {
          ...article
        }
      }
    }
  }
`;
