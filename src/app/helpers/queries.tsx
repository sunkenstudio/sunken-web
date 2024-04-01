import { gql } from "@apollo/client";

export const GET_SITE = gql`
  {
    sites {
      data {
        attributes {
          ClientId
          hero {
            data {
              attributes {
                Header
                Subheader
                Button1
                Button2
                Text
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          sections {
            data {
              attributes {
                Header
                SortOrder
                Text
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Caption
              }
            }
          }
          brand {
            data {
              attributes {
                Primary
                Secondary
                Accent
                Light
                Dark
              }
            }
          }
          footer {
            data {
              attributes {
                Text
                FacebookUrl
                InstagramUrl
                TwitterUrl
              }
            }
          }
        }
      }
    }
  }
`;
