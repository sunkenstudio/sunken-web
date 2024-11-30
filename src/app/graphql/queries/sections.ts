import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_SECTIONS = gql`
  ${Common.GET_STYLED_IMAGE}

  # multiple entities so it gets a "RelationResponseCollection"
  fragment sections on SectionRelationResponseCollection {
    data {
      attributes {
        Header
        Variant
        SortOrder
        Text
        BgColor
        Image {
          ...styledImage
        }
        Caption
        SortOrder
        BgImage {
          ...styledImage
        }
      }
    }
  }
`;
