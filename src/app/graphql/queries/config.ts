import { gql } from '@apollo/client';

export const GET_CONFIG = gql`
  fragment config on ConfigEntityResponse {
    data {
      attributes {
        IsUnderConstruction
        IsMaintenanceMode
      }
    }
  }
`;
