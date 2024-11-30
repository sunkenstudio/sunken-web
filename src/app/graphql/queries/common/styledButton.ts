import { gql } from '@apollo/client';

export const GET_STYLED_BUTTON = gql`
  fragment styledButton on ComponentCommonButton {
    Type
    Text
    Href
    Icon
    Color
    BgColor
    Border {
      width
      radius
      color
    }
    Shadow
  }
`;
