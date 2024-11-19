import { gql } from '@apollo/client';
import * as Common from './common';

export const FEATURE_SECTION = gql`
  ${Common.FEATURE}

  fragment featureSection on FeatureSectionEntityResponse {
    data {
      attributes {
        Header
        Description
        BacksplashColor
        Color
        BgColor
        IconColor
        NumColumns
        SortOrder
        Features {
          ...feature
        }
      }
    }
  }
`;
