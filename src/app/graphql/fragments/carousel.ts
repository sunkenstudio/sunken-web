import { gql } from '@apollo/client';
import * as Common from './common';

export const CAROUSEL = gql`
  ${Common.STYLED_IMAGE}

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
