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
                Text
                Image {
                  Media {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  Alt
                  BorderWidth
                  BorderColor
                  BorderRadius
                  GrayscalePercent
                  FilterColor
                  FilterOpacity
                }
                BgImageOpacity
                BgFilterOpacity
                BgImage {
                  Media {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  Alt
                  BorderWidth
                  BorderColor
                  BorderRadius
                  GrayscalePercent
                  FilterColor
                  FilterOpacity
                }
                Buttons {
                  Type
                  Text
                  Href
                  Icon
                  TextColor
                  BgColor
                  BorderColor
                  BorderWidth
                  BorderRadius
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
                Fields
                SendTo
              }
            }
          }
        }
      }
    }
  }
`;
