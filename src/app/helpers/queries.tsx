import { gql } from "@apollo/client";

export const GET_SITE = gql`
  query Site($ClientId: String) {
    sites(filters: { ClientId: { eq: $ClientId } }) {
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
                BgImageOpacity
                BgFilterOpacity
                BgImage {
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
                BgImageOpacity
                BgFilterOpacity
                BgImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
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
                Font {
                  Url
                  Family
                }
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
          contact {
            data {
              attributes {
                BgImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                BgImageOpacity
                BgFilterOpacity
              }
            }
          }
        }
      }
    }
  }
`;
