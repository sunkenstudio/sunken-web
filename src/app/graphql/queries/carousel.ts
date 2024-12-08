import { gql } from '@apollo/client';
import * as Common from './common';

export const GET_CAROUSEL = gql`
  ${Common.GET_STYLED_IMAGE}

  fragment carousel on CarouselEntityResponse {
    data {
      attributes {
        TransitionTime
        DisplayArrows
        DisplayCounter
        AspectRatioWidth
        AspectRatioHeight
        SortOrder
        Images {
          ...styledImage
        }
      }
    }
  }
`;
