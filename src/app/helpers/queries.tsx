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
                Variant
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
                Caption
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
                Fonts {
                  Url
                  Family
                }
                CompanyName
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
                Fields
                SendTo
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
              }
            }
          }
          config {
            data {
              attributes {
                IsUnderConstruction
                IsMaintenanceMode
              }
            }
          }
        }
      }
    }
  }
`;
