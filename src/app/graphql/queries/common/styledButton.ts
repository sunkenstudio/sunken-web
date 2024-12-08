import { gql } from '@apollo/client';

export const GET_STYLED_BUTTON = gql`
  fragment styledButton on ComponentCommonButton {
    type
    text
    href
    icon
    color
    bgColor
    border {
      width
      radius
      color
    }
    shadow
  }
`;
