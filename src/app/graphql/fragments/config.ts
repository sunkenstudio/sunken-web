import { gql } from '@apollo/client';

export const CONFIG = gql`
  fragment config on ConfigEntityResponse {
    data {
      attributes {
        IsUnderConstruction
        IsMaintenanceMode
      }
    }
  }
`;
