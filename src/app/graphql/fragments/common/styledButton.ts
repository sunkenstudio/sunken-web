import { gql } from '@apollo/client';

export const STYLED_BUTTON = gql`
  fragment styledButton on ComponentCommonButton {
    Type
    Text
    Href
    Icon
    Color
    BgColor
    Border {
      Width
      Radius
      Color
    }
    Shadow
  }
`;
